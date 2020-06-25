import React from 'react'
import {Link} from 'react-router-dom'

function Address (props) {
  return (
    <div className='gridForm'>
      <div className='inscription'>
        <p className='script'>
          Прекрасно. Назовите Ваш адрес. Улицу, номер дома и номер квартиры.
        </p>
      </div>
      <div className='input inputName'>
        <div className='input1'>
          <input
            className='write'
            placeholder='Улица'
            value={props.street}
            onChange={props.inputStreet}
          />
        </div>
        <div className='input2'>
          <input
            className='write'
            placeholder='Номер дома'
            value={props.numberHouse}
            onChange={props.inputNumberHouse}
          />
        </div>
        <div className='input3'>
          <input
            className='write'
            placeholder='Номер квартиры'
            value={props.numberApartament}
            onChange={props.inputNumberApartament}
          />
        </div>
      </div>
      <div className='linkBack'>
        <Link
          className='button'
          to='/name'
        >
          Назад
        </Link>
      </div>
      <div className='linkNext'>
        <Link
          className='button'
          to='/problem'
        >
          Далее
        </Link>
      </div>
      <div className='closes'>
        <Link
          className='button'
          to='/close-application'
        >
          Закрыть заявку
        </Link>
      </div>
    </div>
  )
}

export default Address
