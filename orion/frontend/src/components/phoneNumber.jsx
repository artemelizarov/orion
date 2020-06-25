import React from 'react'
import {Link} from 'react-router-dom'

function PhoneNumber (props) {
  return (
    <div className='gridForm'>
      <div className='inscription'>
        <p className='script'>
          Хорошо. Продиктуйте пожалуйста Ваш номер телефона во избежании каких-либо недоразумений.
        </p>
      </div>
      <div className='input'>
        <input
          className='write'
          placeholder='Номер телефона'
          value={props.phoneNumber}
          onChange={props.inputPhoneNumber}
        />
      </div>
      <div className='linkBack'>
        <Link
          className='button'
          to='/comment'
        >
          Назад
        </Link>
      </div>
      <div className='linkNext'>
        <Link
          className='button'
          to='/offers'
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

export default PhoneNumber
