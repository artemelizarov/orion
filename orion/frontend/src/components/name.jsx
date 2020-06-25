import React from 'react'
import {Link} from 'react-router-dom'

function Name (props) {
  return (
    <div className='gridForm'>
      <div className='inscription'>
        <p className='script'>
          Отлично. Теперь продиктуйте ваши фамилию, имя и отчество.
        </p>
      </div>
      <div className='input inputName'>
        <div className='input1'>
          <input
            className='write'
            placeholder='Фамилия'
            value={props.surname}
            onChange={props.inputSurname}
          />
        </div>
        <div className='input2'>
          <input
            className='write'
            placeholder='Имя'
            value={props.name}
            onChange={props.inputName}
          />
        </div>
        <div className='input3'>
          <input
            className='write'
            placeholder='Отчество'
            value={props.patronymic}
            onChange={props.inputPatronymic}
          />
        </div>
      </div>
      <div className='linkBack'>
        <Link
          className='button'
          to='/city'
        >
          Назад
        </Link>
      </div>
      <div className='linkNext'>
        <Link
          className='button'
          to='/address'
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

export default Name
