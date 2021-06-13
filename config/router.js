import express from 'express'
import Post from '../models/blogPostModel.js'
// import { getOneBook, getAllBooks, addBook, deleteBook, editBook, addReviewToBook,deleteReview } from '../controllers/books.js'
import  { loginUser, registerUser }  from '../controllers/authController.js'
// import { secureRoute } from './secureRoute.js'

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
}


const router = express.Router() 

router.route('/all')
  .get(getAllPosts)
  .post(addPost)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)


export default router