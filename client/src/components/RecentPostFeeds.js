import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddCircleIcon from '@material-ui/icons/AddCircle'
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





  if (!blogPosts) return <h1>No data</h1>
  return (
    <div className='recent-posts-container container'>
      <ol className='recent-post-feeds'>
        {
          blogPosts.map(post => {
            console.log('🐝 ~ file: recentPostFeeds.js ~ line 30 ~ post', post)
            return (
              <li key={post.id}>
                <h1>{post.title}</h1>
                <h3>{post.text}</h3>
                <button className='edit-post'>🟩🟩🟩</button>
                <AddCircleIcon fontSize='large' />
                <button className='like-post'>❤️❤️❤️</button>
                <button className='delete-post'>🟥🟥🟥</button>
                <button className='save-post'>🟪🟪🟪</button>

              </li>)
          })
        }
      </ol>

    </div>

  )
}

export default RecentPostFeeds
