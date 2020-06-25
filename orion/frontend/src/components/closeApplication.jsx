import React from 'react'
import {Link} from 'react-router-dom'

import './../css/closeApplication.css'

import closeApplicationList from './resourses/closeApplicationList'

function CloseApplication (props) {
  const closeApplicationInput=closeApplicationList.map((closeApplication, index) =>
    <option className='option' value={index} key={closeApplication.name}>
      {closeApplication.name}
    </option>
  )
  return (
    <div className='closeApplication'>
      <div className='inscription'>
        <p className='script'>
          Заявка закрыта
        </p>
      </div>
      <div className='select'>
        <select className='write' onChange={props.inputClosingApplication}>
          {closeApplicationInput}
        </select>
      </div>
      <div className='input inputUpdate'>
        <input
          className='write'
          placeholder='Комментарий'
          value={props.commentClosingApplication}
          onChange={props.inputCommentClosingApplication}
        />
      </div>
      <div className='link linkUpdate'>
        <Link
          className='button'
          to='/'
          onClick={props.closeApplication}
        >
          Вернуться
        </Link>
      </div>
    </div>
  )
}

export default CloseApplication
