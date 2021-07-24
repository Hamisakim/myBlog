/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import { getErrorsToastify } from '../helpers/popUps'

/*
* A basic react login component.
* takes username, email, password, and, password confirmation.
///Todo
  *add nice error handling
  *add minimum characters,strong password shit etc.
*/

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })
  const [error, setError] = useState(null)

  const handleChange = () => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }
  const handleSubmit = async () => {
    event.preventDefault()
    console.log('🟪')
    try {
      const registerResponse = await axios.post('api/register', formData)
      console.log('🐝 ~ file: Register.js ~ line 30 ~ registerResponse', registerResponse)
    } catch (error) {
      console.log('🐝 ~ file: Register.js ~ line 36 ~ error', error)
      getErrorsToastify(error)
    }
  }

  const registerForm = <>
    <input
      type='text'
      className='form-control input'
      name='username'
      placeholder='Username'
      value={formData.username}
      onChange={handleChange}
    />
    <input
      type='email'
      name='email'
      placeholder='Email'
      value={formData.email}
      onChange={handleChange}
    />
    <input
      type='password'
      name='password'
      placeholder='Password'
      value={formData.password}
      onChange={handleChange}

    />
    <input
      type='password'
      name='passwordConfirmation'
      placeholder='Password confirmation'
      value={formData.passwordConfirmation}
      onChange={handleChange}
    />
  </>

  return (
    <div>
      <form className='register-form auth-form'
        onSubmit={handleSubmit} >
        {registerForm}
        <button
          style={{
            width: '100px',
            height: '50px',
          }}
        >Register</button>
      </form>
    </div>
  )
}

export default Register
