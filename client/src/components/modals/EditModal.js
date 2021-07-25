/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { isUserOwner } from '../../helpers/authHelp'

const EditModal = ({ postInfo, toggleModal }) => {
  console.log('🐝 ~ toggleModal', toggleModal)
  // console.log('🐝 ~ postInfo', postInfo)
  const [hidden, setHidden] = useState(!toggleModal)

  const [formData, setFormData] = useState(
    {
      title: '',
      text: '',
    }
  )
  console.log('🐝 ~ formData', formData)
  useEffect(() => {
    if (!postInfo) return null
    setFormData(
      {
        title: postInfo.title,
        text: postInfo.text,
      }
    )
  }, [postInfo])

  if (!postInfo) return null
  const { owner } = postInfo
  isUserOwner(owner._id)


  const formFields = <>
    <input
      // rows="400"
      className="input"
      type="text"
      placeholder={formData.title}
      value={formData.title}
      name="title"
    // onChange={handleChange}
    // value={formData.password}
    />
    <textarea
      className="input"
      type="textarea"
      // placeholder={formData.text}
      value={formData.text}
      name="text"
    // onChange={handleChange}
    // value={formData.password}
    />
  </>
  const handleClose = () => {
    setHidden(true)
    //set display hidden
    //or pass to state... 
  }

  return (
    <div className="modal edit-modal"
      style={hidden ? { display: 'none' } : { display: 'block' }}
    >
      {formFields}
      <button className="close-modal-btn" onClick={handleClose}></button>
    </div>
  )
}

export default EditModal
