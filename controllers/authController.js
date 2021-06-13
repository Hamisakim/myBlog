import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'

export const registerUser = async(req, res) => {
  const checkUsername = await User.findOne( { username: req.body.username })
  const checkEmail = await User.findOne( { username: req.body.email })
  try {
    if (checkUsername){
      throw new Error('Username taken'),
      res.status(202).json({ message: 'username taken', usernameTaken: true })
    } 
    if (checkEmail){
      throw new Error('Email taken')
    }
    const newUser = await User.create(req.body)
    console.log('🤖 ~ file: authController.js ~ line 10 ~ newUser', newUser)  
    return res.status(202).json({ message: `welcome ${newUser.username}` })
  } catch (err) {
    console.log('🤖 ~ file: authController.js ~ line 10 ~ err', err)
    return res.status(409).json({ message: err })
  }
}
export const loginUser = async(req, res) => {
  //console.log('🐝 ~ file: authController.js ~ line 27 ~ req', req)
  const usernameOrEmail = req.body.username || req.body.email
  try {
    const userToLogIn = await User.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail } ] })
    //console.log('🤖 ~ file: authController.js ~ line 30 ~ userToLogIn', userToLogIn)
    if (!userToLogIn || !userToLogIn.validatePassword(req.body.password)) {
      throw new Error( '🟥 Login details incorrect' )
    }
    const token = jwt.sign({ sub: userToLogIn._id }, secret, { expiresIn: '7 days' })
    return res.status(200).json({ message: `Welcome back ${userToLogIn.username }`, token })
  } catch (err) {
    console.log('🐝 ~ file: authController.js ~ line 38 ~ err', err.message)
    res.status(401).json( err.message  )
  }
}