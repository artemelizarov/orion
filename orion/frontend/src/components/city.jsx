import React from 'react'
import {Link} from 'react-router-dom'

function City (props) {
  return (
    <div className='gridForm'>
      <div className='inscription'>
        <p className='script'>
          Здравствуйте, давайте составим заявку. Подскажите, из какого Вы города?
        </p>
      </div>
      <div className='input'>
        <input
          className='write'
          placeholder='Город'
          value={props.city}
          onChange={props.inputCity}
        />
      </div>
      <div className='link'>
        <Link
          className='button'
          to='/name'
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

export default City
