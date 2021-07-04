import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RecentPostFeeds = () => {

  /*
* get all the posts
* get first 50 characters and add ... to the header 
* have a click more to see more or take them to the pager
* o
*/

  const [blogPosts, setBlogPosts] = useState(null)
  console.log('🐝 ~ file: recentPostFeeds.js ~ line 15 ~ blogPosts',  blogPosts)

  const getPosts = async () => {
    const posts = await axios.get('api/posts')
    setBlogPosts(posts.data)
  }
  useEffect(() => {
    getPosts()  
  },[])

  if (!blogPosts) return <h1>No data</h1>
  return (
    <ol style={{
      listStyle: 'none',
    }}>
      {
        blogPosts.map(post=>{
          console.log('🐝 ~ file: recentPostFeeds.js ~ line 30 ~ post', post)
          return ( 
            <li className='post-feed-post' key={post.id}>
              <h1>{post.title}</h1>
              <h3>{post.text}</h3>
            </li>)
        })
      }  
    </ol>
  )
}

export default RecentPostFeeds
