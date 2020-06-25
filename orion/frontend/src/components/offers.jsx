import React from 'react'
import {Link} from 'react-router-dom'

import './../css/offers.css'

import ratesList from './resourses/ratesList'

function Offers (props) {
  const ratesOutput=ratesList.map((rates) =>
    <div key={rates.name} className='ratesItem'>
      <p className='heading'>
        {rates.name}
      </p>
      <p className='price'>
        {rates.price} руб.
      </p>
      <p className='speed'>
        {rates.speed} Мбит/с
      </p>
      <p className='priceRentRouter'>
        Аренда роутера: {rates.priceRentRouter} руб/мес
      </p>
      <p className='numberChannels'>
        Количество каналов: {rates.numberChannels}
      </p>
    </div>
  )
  const ratesInput=ratesList.map((rates, index) =>
    <option className='option' value={index} key={rates.name}>
      {rates.name}
    </option>
  )
  return (
    <div className='offers'>
      <div className='inscription'>
        <p className='script'>
          По адресу ул.{props.street}, д. {props.numberHouse}, кв. {props.numberApartament} доступны тарифы
        </p>
      </div>
      <div className='table'>
        {ratesOutput}
      </div>
      <div className='select'>
        <select className='write' onChange={props.inputRates}>
          {ratesInput}
        </select>
      </div>
      <div className='linkBack linkUpdate'>
        <Link
          className='button'
          to='/phone-number'
        >
          Назад
        </Link>
      </div>
      <div className='linkNext linkUpdate'>
        <Link
          className='button'
          to='/confirmation'
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

export default Offers
