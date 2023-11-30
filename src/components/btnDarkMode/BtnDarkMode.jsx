import sun from './moon.svg'
import moon from './sun.svg'
import './style.css'
import { useState } from 'react'

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useState('light')

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
return
    })
  }

  return (
    <button className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  )
}

export default BtnDarkMode
