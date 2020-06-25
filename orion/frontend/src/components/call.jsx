import React from 'react'
import {Link} from 'react-router-dom'
import imageCall from './../css/image/call.png'
import './../css/call.css'

function Call (props) {
  return (
    <div className='call'>
      <div className='call__image'>
        <img
          className='handset'
          src={imageCall}
          alt='#'
        />
      </div>
      <div className='call__link'>
        <Link
          className='button'
          to='/city'
        >Ответить на звонок</Link>
      </div>
    </div>
  )
}

export default Call
