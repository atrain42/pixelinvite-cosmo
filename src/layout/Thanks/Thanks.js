import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Thanks.module.css'

export default function Thanks() {
  return (
    <div className={classes.thanks}>
      <h1>Thanks for RSVPing</h1>
      <p>We hope to see you at the shower!</p>
      <Link className='nav-btn' to='/'>
        Home
      </Link>
    </div>
  )
}
