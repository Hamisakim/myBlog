import express from 'express'
import { getAllPosts, addPost, getOnePost, deletePost, editPost } from '../controllers/postController.js'
import { loginUser, registerUser } from '../controllers/authController.js'
import { secureRoute } from './secureRoute.js'
import { getAllUsers } from '../controllers/userController.js'



const router = express.Router()

router.route('/posts')
  .get(getAllPosts)
  .post(secureRoute, addPost)

router.route('/posts/:id')
  .get(getOnePost)
  .patch(secureRoute, editPost)
  .delete(secureRoute, deletePost)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/users')
  .get(getAllUsers)


export default router