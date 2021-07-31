import React, { useState, useEffect } from 'react'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'

const ThemeChanger = () => {
  const [isThemeLight, setIsThemeLight] = useState(false)


  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const getTheme = localStorage.getItem('Theme')
    const doesUserPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    console.log('🐝 ~ mqList', doesUserPreferDark)

    if (doesUserPreferDark) {
      setIsThemeLight(false)
      return document.body.classList.add('dark-mode')
    } else if (!doesUserPreferDark) {
      setIsThemeLight(true)
    }
    // if (getTheme === 'dark') {
    //   setIsThemeLight(false)
    //   return document.body.classList.add('dark-mode')
    // } else if (getTheme === 'light') {
    //   setIsThemeLight(true)
    // }
  }, [])

  const handleChange = () => {
    setIsThemeLight(!isThemeLight)
    if (isThemeLight) {
      localStorage.setItem('Theme', 'dark')
      document.body.classList.add('dark-mode')
    } else {
      localStorage.setItem('Theme', 'light')
      document.body.classList.remove('dark-mode')
    }
  }

  return (
    <div>
      {/* {isThemeLight ? <Brightness7Icon /> : <Brightness4Icon />} */}
      <div className='theme-changer-button' onClick={handleChange}>
        {isThemeLight ? <Brightness7Icon fontSize='large' /> : <Brightness4Icon fontSize='large' />}
      </div>
    </div>
  )
}

export default ThemeChanger