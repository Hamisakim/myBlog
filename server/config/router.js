import express from 'express'
import { getAllPosts, addPost, getOnePost, deletePost, editPost } from '../controllers/postController.js'
import  { loginUser, registerUser }  from '../controllers/authController.js'
import { secureRoute } from './secureRoute.js'

const router = express.Router() 

router.route('/posts')
  .get(getAllPosts)
  .post(secureRoute,addPost)

router.route('/posts/:id')
  .get(getOnePost)
  .put(secureRoute, editPost)
  .delete(secureRoute, deletePost)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)


export default router