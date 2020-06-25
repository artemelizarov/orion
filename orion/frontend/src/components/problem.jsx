import React from 'react'
import {Link} from 'react-router-dom'

import problemList from './resourses/problemsList'

function Problem (props) {
  const problemListInput=problemList.map((problem, index) =>
    <option className='option' value={index} key={problem.name}>
    {problem.name}
    </option>
  )
  return (
    <div className='gridForm'>
      <div className='inscription'>
        <p className='script'>
          Озвучьте пожалуйста проблему. Мы постараемся Вам помочь.
        </p>
      </div>
      <div className='input'>
        <select className='write' onChange={props.inputProblem}>
          {problemListInput}
        </select>
      </div>
      <div className='linkBack'>
        <Link
          className='button'
          to='/address'
        >
          Назад
        </Link>
      </div>
      <div className='linkNext'>
        <Link
          className='button'
          to='/comment'
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

export default Problem
