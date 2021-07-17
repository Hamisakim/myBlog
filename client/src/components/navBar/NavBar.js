import React from 'react'
import '../../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss'
import { Link } from 'react-router-dom'
import ThemeChanger from '../ThemeChanger'

/*
* Hello! A simple self contained navbar for react! Responsive & has style options below for easy customization. Pass through props of the items and will make links for you :) 
* client -> `yarn add hamburgers` 
*/

const styleVariables = {
  backgroundColor: 'red',
}

const myStyle = {
  backgroundColor: styleVariables.backgroundColor,
  // position: 'absolute',
  // backgroundColor: props.color,

  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'spaceBetween',
  // border: '1px solid blue',
}
const navItems = {
  // border: '1px solid blue',
  paddingRight: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  backgroundColor: styleVariables.backgroundColor,
}

const dropDownStyle = {
  backgroundColor: 'red',
  zIndex: 1000,
  position: 'fixed',
  height: '100vh',
  width: '33%',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '2rem',
  // textDecoration: 'none',
  // top: '100px',
}
const NavBar = (props) => {
  console.log('🐝 ~ file: NavBar.js ~ line 4 ~ props', props)
  const [isActive, setIsActive] = React.useState(false)
  const handleBurger = () => {
    console.log('clicked')
    setIsActive(!isActive)

  }




  // eslint-disable-next-line no-unused-vars
  // const returnLinks = (links) => {
  //   // eslint-disable-next-line no-unused-vars
  //   links.map((link) => {
  //     return (
  //       <React.Link key={link} to={`${link}`} className="navbar-item">
  //         Sign Up
  //       </React.Link>
  //     )
  //   })

  // }


  return (
    <>
      <nav style={myStyle}>
        <div style={navItems} className='nav-items'>
          <div className='hamburger'>
            <button
              className={`hamburger--collapse hamburger ${isActive ? 'is-active' : ''}`}
              type="button"
              onClick={handleBurger}  >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
          <ThemeChanger />
        </div>

        <div
          className={!isActive ? 'scale-in-hor-left' : 'dropdown'}
          style={
            !isActive ? {
              display: 'none',
              dropDownStyle,
            } : dropDownStyle
          }
        >
          {/* <a href='#about'>About</a> */}
          <Link style={{
            textAlign: 'center',
          }}
          to={'/home'} className="navbar-item">
            Home
          </Link>
          <Link to={'/new'} className="navbar-item">
            New
          </Link>
          <Link to={'/login'} className="navbar-item">
            Login
          </Link>
          <Link to={'/register'} className="navbar-item">
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar
