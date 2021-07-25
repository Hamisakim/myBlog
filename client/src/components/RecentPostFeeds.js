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
  const getPosts = async () => {
    const posts = await axios.get('api/posts')
    setBlogPosts(posts.data)
  }
  useEffect(() => {
    getPosts()
  }, [])


  /*
   * use a function to pass through the blog post info rather than another get request?
   * 
   */


  const [postId, setPostId] = useState(null)
  const [singlePost, setSinglePost] = useState(null)

  const [toggleModal, setToggleModal] = useState(false)
  const handleModalClick = (event) => {
    const postId = event.target.value
    const postInfo = blogPosts.find(posts => posts.id === postId)
    setToggleModal(!toggleModal)
    setPostId(postId)
    setSinglePost(postInfo)
    // setToggleModal(false)
  }

  if (!blogPosts) return <h1>No data</h1>
  return (
    <div style={{ marginTop: '200px' }} className='recent-posts-container container'>
      {toggleModal &&
        // eslint-disable-next-line no-undef
        <EditModal toggleModal={toggleModal} postId={postId} postInfo={singlePost} />
      }
      <ol className='recent-post-feeds'>

        {blogPosts.map(post => {
          // console.log('🐝 ~ file: recentPostFeeds.js ~ line 30 ~ post', post)
          return (
            <li key={post.id}>
              <h1>{post.title}</h1>
              <h3>{post.text}</h3>
              <button className='edit-post'
                value={post.id}
                onClick={handleModalClick}>
                Edit Post
              </button>


              {/* <AddCircleIcon fontSize='large' /> */}
              <button className='like-post'>❤️❤️❤️</button>
              <button className='delete-post'>🟥🟥🟥</button>
              <button className='save-post'>🟪🟪🟪</button>
            </li>
          )
        })}

      </ol>


    </div>

  )
}

export default RecentPostFeeds
