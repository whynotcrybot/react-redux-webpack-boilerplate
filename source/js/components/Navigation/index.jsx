import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/neko'>Neko</Link>
      <Link to='/counter'>Counter</Link>
    </div>
  )
}

export default Navigation
