import React from 'react'
import Nabver from './components/Nabver'
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <div>
      <Nabver theme = {theme}/> 
    </div>
  )
}

export default App
