import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav2 = (props) => {
 const data =  useContext(ThemeDataContext)
  return (
    <div>
      <div className='nav2'>
        <h4>home</h4>
        <h4>About</h4>
        <h4>Services</h4>
        <h4>Contact</h4>
        <h4>{data}</h4>
        <h4>{props.theme}</h4>
      </div>
    </div>
  )
}

export default Nav2
