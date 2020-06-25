import postgresql
import flask
import json
app = flask.Flask(__name__)

# disables JSON pretty-printing in flask.jsonify
# app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False


def db_conn():
    return postgresql.open('pq://postgres:123@127.0.0.1:5432/postgres')


def to_json(data):
    return json.dumps(data) + "\n"


def resp(code, data):
    return flask.Response(
        status=code,
        mimetype="application/json",
        response=to_json(data)
    )


def abonent_validate():
    errors = []
    json = flask.request.get_json(force=True)
    print(json)
    if json is None:
        errors.append(
            "No JSON sent. Did you forget to set Content-Type header" +
            " to application/json?")
        
        return (None, errors)
    
    
    for field_name in ['fio', 'adress', 'cause', 'comment', 'phone', 'tariff']:
        print(json.get(field_name))
        if type(json.get(field_name)) is not str:
            errors.append(
                "Field '{}' is missing or is not a string".format(
          field_name))

    return (json, errors)


def affected_num_to_code(cnt):
    code = 200
    if cnt == 0:
        code = 404
    return code


@app.route('/')
def root():
    return flask.redirect('/api/1.0/abonents')

# e.g. failed to parse json
@app.errorhandler(400)
def page_not_found(e):
    return resp(400, {})


@app.errorhandler(404)
def page_not_found(e):
    return resp(400, {})


@app.errorhandler(405)
def page_not_found(e):
    return resp(405, {})


@app.route('/api/1.0/abonents', methods=['GET'])
def get_abonents():
    print("hello")
    with db_conn() as db:
        tuples = db.query("SELECT id, fio, adress, cause, comment, phone, tariff FROM abonents")
        abonents = []
        for (id, fio, adress, cause, comment, phone, tariff) in tuples:
            abonents.append({"id": id, "fio": fio, "adress": adress, "cause": cause, "comment": comment, "phone": phone, "tariff": tariff})
        return resp(200, {"abonents": abonents})


@app.route('/api/1.0/abonents', methods=['POST'])
def post_abonent():
    (json, errors) = abonent_validate()
    headers = flask.request.headers
    print("Request headers:\n" + str(headers))
    if errors:  # list is not empty
        return resp(400, {"errors": errors})

    with db_conn() as db:
        insert = db.prepare(
            "INSERT INTO abonents (fio, adress, cause, comment, phone, tariff) VALUES ($1, $2, $3, $4, $5, $6 ) " +
            "RETURNING id")
        [(abonent_id,)] = insert(json['fio'], json['adress'], json['cause'], json['comment'], json['phone'], json['tariff'])
        return resp(200, {"abonent_id": abonent_id})


@app.route('/api/1.0/abonents/<int:abonent_id>', methods=['PUT'])
def put_abonent(abonent_id):
    (json, errors) = abonent_validate()
    if errors:  # list is not empty
        return resp(400, {"errors": errors})

    with db_conn() as db:
        update = db.prepare(
            "UPDATE abonents SET fio = $2, adress = $3, cause = $4, comment = $5, phone = $6, tariff = $7 WHERE id = $1")
        (_, cnt) = update(abonent_id, json['fio'], json['adress'], json['cause'], json['comment'], json['phone'], json['tariff'])
        return resp(affected_num_to_code(cnt), {})


@app.route('/api/1.0/abonents/<int:abonent_id>', methods=['DELETE'])
def delete_abonent(abonent_id):
    with db_conn() as db:
        delete = db.prepare("DELETE FROM abonents WHERE id = $1")
        (_, cnt) = delete(abonent_id)
        return resp(affected_num_to_code(cnt), {})

if __name__ == '__main__':
    app.debug = True  # enables auto reload during development
    app.run()


