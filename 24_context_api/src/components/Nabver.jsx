import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'


const Nabver = (props) => {
  const data = useContext(ThemeDataContext)
  console.log(data);
  
  return (
    <div className='nav'>
    <h2>PRainshu</h2>
<h2>{data}</h2>
      <Nav2  theme ={props.theme}/>
    </div>
  )
}

export default Nabver
