import React from "react";
import { Switch, Route } from "react-router-dom";
import "./css/App.css";
import axios from "axios";

import problemList from "./components/resourses/problemsList.json";
import ratesList from "./components/resourses/ratesList.json";
import closeApplicationList from "./components/resourses/closeApplicationList.json";

import Call from "./components/call";
import City from "./components/city";
import Name from "./components/name";
import Address from "./components/address";
import Problem from "./components/problem";
import Comment from "./components/comment";
import PhoneNumber from "./components/phoneNumber";
import Offers from "./components/offers";
import Confirmation from "./components/confirmation";
import Finish from "./components/finish";
import CloseApplication from "./components/closeApplication";

// const options = {
//   url: "localhost:5000/api/1.0/abonents/24",
//   method: "DELETE&PATCH",
// };

class App extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    city: "",
    surname: "",
    name: "",
    patronymic: "",
    street: "",
    numberHouse: "",
    numberApartament: "",
    problem: "",
    comment: "",
    phoneNumber: "",
    rates: "",
    reasonClosingApplication: "",
    commentClosingApplication: "",
    id: 0,
  };
  textInputChange = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  };
  textSelectProblem = (event) => {
    this.setState({ problem: problemList[event.target.value].name });
  };
  textSelectRates = (event) => {
    this.setState({ rates: ratesList[event.target.value].name });
  };
  textSelectClosingApplication = (event) => {
    this.setState({
      reasonClosingApplication: closeApplicationList[event.target.value].name,
    });
  };
  resetFields = (event) => {
    console.log(
      "Город: ",
      this.state.city,
      "ФИО: ",
      this.state.surname,
      this.state.name,
      this.state.patronymic,
      "Адрес: ",
      this.state.street,
      this.state.numberHouse,
      this.state.numberApartament,
      "Проблема: ",
      this.state.problem,
      "Комментарий: ",
      this.state.comment,
      "Тариф: ",
      this.state.rates
    );
    this.setState({
      city: "",
      surname: "",
      name: "",
      patronymic: "",
      street: "",
      numberHouse: "",
      numberApartament: "",
      problem: "",
      comment: "",
      phoneNumber: "",
      rates: "",
      reasonClosingApplication: "",
      commentClosingApplication: "",
      id: this.state.id + 1,
    });
  };

  sentData = (event) => {
    

    axios
      .post(`http://127.0.0.1:5000/api/1.0/abonents`, {
        fio: this.state.surname + this.state.name + this.state.patronymic,
        adress:
          this.state.city +
          this.state.street +
          this.state.numberHouse +
          this.state.numberApartament,
        cause: this.state.problem,
        comment: this.state.comment,
        phone: this.state.phoneNumber,
        tariff: this.state.rates,
      })
      .then((res) => {
      });
  };
  closeApplication = (event) => {
    console.log(
      "Причина: ",
      this.state.reasonClosingApplication,
      "Комментарий: ",
      this.state.commentClosingApplication
    );
    this.setState({
      city: "",
      surname: "",
      name: "",
      patronymic: "",
      street: "",
      numberHouse: "",
      numberApartament: "",
      problem: "",
      comment: "",
      phoneNumber: "",
      rates: "",
      reasonClosingApplication: "",
      commentClosingApplication: "",
      id: this.state.id + 1,
    });
  };
  render() {
    return (
      <Switch className="app">
        <Route exact path="/" component={Call} />
        <Route
          path="/city"
          render={() => (
            <City
              city={this.state.city}
              inputCity={this.textInputChange("city")}
            />
          )}
        />
        <Route
          path="/name"
          render={() => (
            <Name
              surname={this.state.surname}
              inputSurname={this.textInputChange("surname")}
              name={this.state.name}
              inputName={this.textInputChange("name")}
              patronymic={this.state.patronymic}
              inputPatronymic={this.textInputChange("patronymic")}
            />
          )}
        />
        <Route
          path="/address"
          render={() => (
            <Address
              street={this.state.street}
              inputStreet={this.textInputChange("street")}
              numberHouse={this.state.numberHouse}
              inputNumberHouse={this.textInputChange("numberHouse")}
              numberApartament={this.state.numberApartament}
              inputNumberApartament={this.textInputChange("numberApartament")}
            />
          )}
        />
        <Route
          path="/problem"
          render={() => <Problem inputProblem={this.textSelectProblem} />}
        />
        <Route
          path="/comment"
          render={() => (
            <Comment
              comment={this.state.comment}
              inputComment={this.textInputChange("comment")}
            />
          )}
        />
        <Route
          path="/phone-number"
          render={() => (
            <PhoneNumber
              phoneNumber={this.state.phoneNumber}
              inputPhoneNumber={this.textInputChange("phoneNumber")}
            />
          )}
        />
        <Route
          path="/offers"
          render={() => (
            <Offers
              street={this.state.street}
              numberHouse={this.state.numberHouse}
              numberApartament={this.state.numberApartament}
              inputRates={this.textSelectRates}
            />
          )}
        />
        <Route
          path="/confirmation"
          render={() => (
            <Confirmation
              city={this.state.city}
              surname={this.state.surname}
              name={this.state.name}
              patronymic={this.state.patronymic}
              street={this.state.street}
              numberHouse={this.state.numberHouse}
              numberApartament={this.state.numberApartament}
              problem={this.state.problem}
              comment={this.state.comment}
              phoneNumber={this.state.phoneNumber}
              rates={this.state.rates}
              sentData={this.sentData}
            />
          )}
        />
        <Route
          path="/finish"
          render={() => <Finish resetFields={this.resetFields} />}
        />
        <Route
          path="/close-application"
          render={() => (
            <CloseApplication
              commentClosingApplication={this.state.commentClosingApplication}
              inputCommentClosingApplication={this.textInputChange(
                "commentClosingApplication"
              )}
              inputClosingApplication={this.textSelectClosingApplication}
              closeApplication={this.closeApplication}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
