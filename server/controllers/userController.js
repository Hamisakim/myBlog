import User from '../models/userModel.js'

export const getAllUsers = async(req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (err) {
    console.log('🆘 Something went wrong!', err)
    return res.status(404).json({ 'message': 'Not found' })
  }
}

export const getSingleUser = async(req, res) => {
  try {
    const { id } = req.params
    console.log('id ->', id)
    // ! dont forget to .populate()
    const singleUser = await User.findById(id)
    if (!singleUser) {
      throw new Error('no user exists with that id')
    }
    res.status(200).json(singleUser)
  } catch (err) {
    console.log('🆘 Something went wrong!', err)
    return res.status(404).json({ 'message': 'Not found' })
  }
}