import React from 'react'
import {Link} from 'react-router-dom'


function Comment (props) {
  return (
    <div className='gridForm'>
      <div className='inscription'>
        <p className='script'>
          "Мой комментарий: агрессивный, тупой, есть собака, позвонить, когда подъедут и т.д..."
        </p>
      </div>
      <div className='input'>
        <input
          className='write'
          placeholder='Комментарий'
          value={props.comment}
          onChange={props.inputComment}
        />
      </div>
      <div className='linkBack'>
        <Link
          className='button'
          to='/problem'
        >
          Назад
        </Link>
      </div>
      <div className='linkNext'>
        <Link
          className='button'
          to='/phone-number'
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

export default Comment
