import express from 'express'
// import { getOneBook, getAllBooks, addBook, deleteBook, editBook, addReviewToBook,deleteReview } from '../controllers/books.js'
// import  { loginUser, registerUser }  from '../controllers/auth.js'
// import { secureRoute } from './secureRoute.js'

const test = () => {
  console.log('🟢')
}
const router = express.Router() 

router.route('/')
  .get(test)
  // .post(secureRoute, addBook)


export default router