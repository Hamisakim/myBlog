import React from 'react'
import '../../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss'

/*
* Hello! A simple self contained navbar for react! Responsive & has style options below for easy customization. Pass through props of the items and will make links for you :) 
* client -> `yarn add hamburgers` 
*/




const NavBar = (props) => {
  console.log('🐝 ~ file: NavBar.js ~ line 4 ~ props', props)
  const [isActive, setIsActive] = React.useState(false)
  const handleBurger = () => {
    console.log('clicked')
    setIsActive(!isActive)
  }


  const myStyle = {
    backgroundColor: '',
    // position: 'absolute',
    // backgroundColor: props.color,

    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'spaceBetween',
    border: '1px solid blue',
  }

  
  // eslint-disable-next-line no-unused-vars
  const returnLinks = (links) => {
    
    links.map((link) => {
      return (
        <React.Link key={link} to={`${link}`} className="navbar-item">
        Sign Up
        </React.Link>
      )
    })
    
  }
  
  const navItems = {
    // border: '1px solid blue',
    paddingRight: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',

  }
  
  const dropDownStyle = {
    backgroundColor: 'red',
    zIndex: 1000,
    position: 'fixed',
    // top: '100px',
  }
  return (
    <>
      <nav style={myStyle}>
        <div style={navItems}className='nav-items'>
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
        </div>

        <div 
          className={'dropdown'}
          style={
            !isActive ? {
              display: 'none',
              dropDownStyle,
            } : dropDownStyle
          }
        >
          <a href='#about'>About</a>
        </div>
      </nav>
    </>
  )
}

export default NavBar
