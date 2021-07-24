/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import EditModal from './modals/EditModal'
// import { set } from 'mongoose'
// import { set } from 'mongoose'
const RecentPostFeeds = () => {

  /*
* get all the posts
* get first 50 characters and add ... to the header 
* have a click more to see more or take them to the pager
* o
*/

  const [blogPosts, setBlogPosts] = useState(null)
  console.log('🐝 ~ file: recentPostFeeds.js ~ line 15 ~ blogPosts', blogPosts)

  const getPosts = async () => {
    const posts = await axios.get('api/posts')
    setBlogPosts(posts.data)
  }
  useEffect(() => {
    getPosts()
  }, [])


  const [postId, setPostId] = useState(null)
  const [editModal, setEditModal] = useState(true)
  const handleNewEditClick = (event) => {
    setEditModal(true)
    console.log('🟢')
    setPostId(event.target.value)
  }


  if (!blogPosts) return <h1>No data</h1>
  return (
    <div style={{ marginTop: '200px' }} className='recent-posts-container container'>
      {editModal &&
        // eslint-disable-next-line no-undef
        <EditModal postId={postId} />
      }
      <ol className='recent-post-feeds'>
        {
          blogPosts.map(post => {
            // console.log('🐝 ~ file: recentPostFeeds.js ~ line 30 ~ post', post)
            return (
              <li key={post.id}>
                <h1>{post.title}</h1>
                <h3>{post.text}</h3>
                <button className='edit-post'
                  value={post.id}
                  onClick={handleNewEditClick}>🟩🟩🟩</button>
                {/* <AddCircleIcon fontSize='large' /> */}
                <button className='like-post'>❤️❤️❤️</button>
                <button className='delete-post'>🟥🟥🟥</button>
                <button className='save-post'>🟪🟪🟪</button>
              </li>


            )
          })
        }
      </ol>


    </div>

  )
}

export default RecentPostFeeds
