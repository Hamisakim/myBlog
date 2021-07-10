import React, { useState } from 'react'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/authHelp'
import { getErrorsToastify, toastifyPopUp } from '../helpers/popUps'


//Todo
//* add form for new posts
//* Error handling on title, text, etc,


const NewPost = () => {
  
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState(
    {
      title: '',
      text: '',
    }
  )
 

  const [errors, setErrors] = useState(null)
  console.log('🔴 ~ file: NewPost.js ~ line 25 ~ errors', errors)



  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const token = getTokenFromLocalStorage()
      await axios.post('/api/posts',formData, {
        headers: { Authorization: `Bearer ${token}` } })
      toastifyPopUp(true,'Post Created')
      event.target.reset()
    } catch (err) {
      setErrors(err.response.data.error)
      getErrorsToastify(err)
    }
  }
  
  const formFields = <>
    <input
      // rows="400"
      className="input"
      type="text"
      placeholder="What's the title?"
      name="title"
      onChange={handleChange}
      // value={formData.password}
    />
    <textarea
      className="input"
      type="textarea"
      placeholder="What are you thinking...?"
      name="text"
      onChange={handleChange}
      // value={formData.password}
    />
  </>
                  

  return (
    <div>
      <form 
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        {formFields}
        <div className="field-button">
          <button className="submit-post-btn">Submit Post</button><br />
        </div>
      </form>
    </div>
  )
}

export default NewPost
