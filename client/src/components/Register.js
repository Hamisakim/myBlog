/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

/*
* A basic react login component.
* takes username, email, password, and, password confirmation.
///Todo
  *add nice error handling
  *add minimum characters,strong password shit etc.
*/

const Register = () => {


  // eslint-disable-next-line no-unused-vars
  const [formData,setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })
  const handleChange = () => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }
  
  const handleSubmit = () => {



    
  }


  const registerForm = <>
    <input
      className='form-control input'
      name="username" 
      placeholder="Username" 
      value={formData.username}
      onChange={handleChange}
    />
    <input 
      type="email"
      name='email'
      placeholder='Email'
      value={formData.email}
      onChange={handleChange}
    />
    <input 
      type="password"
      name='password'
      value={formData.password}
      onChange={handleChange}

    />
    <input 
      type="password"
      name='passwordConfirmation'
      value={formData.passwordConfirmation}
      onChange={handleChange}
    />
  </>

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        {registerForm}


      </form>



    </div>
  )
}

export default Register
