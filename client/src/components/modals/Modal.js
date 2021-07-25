import React, { useState, useEffect } from 'react'
import { isUserOwner, getTokenFromLocalStorage } from '../../helpers/authHelp'
import axios from 'axios'
import { getErrorsToastify, toastifyPopUp } from '../../helpers/popUps'

//if no change, no edit

const Modal = ({ postInfo, toggleModal, onClose }) => {
  const [hidden, setHidden] = useState(!toggleModal)
  const [errors, setErrors] = useState(null)
  console.log('🐝 ~ errors', errors)
  const [formData, setFormData] = useState(
    {
      title: '',
      text: '',
      edited: true,

    }
  )
  useEffect(() => {
    if (!postInfo) return null
    setFormData(
      {
        title: postInfo.title,
        text: postInfo.text,
        edited: true,
      }
    )
  }, [postInfo])

  if (!postInfo) return null
  const { owner } = postInfo
  isUserOwner(owner._id)

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (
      postInfo.title === formData.title && postInfo.text === formData.text
    ) {
      toastifyPopUp(false, 'No Changes to save')
      return null
    }
    try {
      const token = getTokenFromLocalStorage()
      const response = await axios.patch(`/api/posts/${postInfo.id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log('🐝 ~ response', response)
      toastifyPopUp(true, 'Post edited')
      // event.target.reset()
    } catch (err) {
      console.log('🐝 ~ err', err)
      setErrors(err.response.data.error)
      getErrorsToastify(err)
    }
  }
  const handleClose = () => {
    setHidden(true)
    onClose()
  }

  const formFields = <>
    <input
      // rows="400"
      className="input"
      type="text"
      placeholder={formData.title}
      value={formData.title}
      name="title"
      onChange={handleChange}
    />
    <textarea
      className="input"
      type="textarea"
      value={formData.text}
      name="text"
      onChange={handleChange}
    />
  </>


  return (
    <div className="modal edit-modal"
      style={hidden ? { display: 'none' } : null}
    >
      <div className='modal-con'>
        {formFields}
        <button className="close-modal-btn" onClick={handleClose}>Close</button>
        <button className="submit-modal-btn" onClick={handleSubmit}>Edit</button>
      </div>
    </div>
  )
}

export default Modal
