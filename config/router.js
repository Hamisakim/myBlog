import express from 'express'
import Post from '../models/blogPostModel.js'
// import { getOneBook, getAllBooks, addBook, deleteBook, editBook, addReviewToBook,deleteReview } from '../controllers/books.js'
import  { loginUser, registerUser }  from '../controllers/authController.js'
import { secureRoute } from './secureRoute.js'

const getAllPosts = async (req,res) => {
  try {
    console.log('🟢')
    const posts = await Post.find().populate('owner')
    console.log('🐝 ~ post', posts)
    return res.status(200).json(posts)
  } catch (error) {
    console.log('🟥 file: router.js ~ line 14 ~ error', error)
    return res.status(500).json('fuck')

  }

}

const addPost = async (req,res) => {
  console.log('🟢')
  try {
    const newPost = { ...req.body, owner: req.currentUser }
    const postToAdd = await Post.create(newPost)
    console.log('🐝 ~ file: router.js ~ line 26 ~ postToAdd', postToAdd)
    return res.status(201).json(postToAdd)
  } catch (error) {
    // console.log('🐝 ~ file: router.js ~ line 26 ~ error', error)
    res.status(422).json( error.message  )
    console.error()
  }



}


const router = express.Router() 

router.route('/all')
  .get(getAllPosts)
  .post(secureRoute,addPost)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)


export default router