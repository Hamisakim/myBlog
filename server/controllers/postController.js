import Post from '../models/blogPostModel.js'
import { adminID } from '../config/environment.js'

export const getAllPosts = async (req,res) => {
  try {
    const posts = await Post.find().populate('owner')
    return res.status(200).json(posts)
  } catch (error) {
    console.log('🟥 file: router.js ~ line 14 ~ error', error)
    return res.status(500).json('fuck')
  }
}

export const getOnePost = async (req,res) => {
  try {
    const { id } = req.params
    const singlePost = await Post.findById(id).populate('owner')
    if (!singlePost) {
      throw new Error('no post exists with that id')
    }
    return res.status(200).json( singlePost )
  } catch (error) {
    console.log('🟥 ~ file: router.js ~ line 45 ~ error', error)
    res.status(500).json( error.message  )
  }
}

export const addPost = async (req,res) => {
  console.log('add post 🟢')
  try {
    const newPost = { ...req.body, owner: req.currentUser }
    const postToAdd = await Post.create(newPost)
    console.log('🐝 ~ file: router.js ~ line 26 ~ postToAdd', postToAdd)
    return res.status(202).json(postToAdd)
  } catch (error) {
    // console.log('🐝 ~ file: router.js ~ line 26 ~ error', error)
    res.status(422).json( error.message  )
    console.error()
  }
}

export const deletePost = async (req, res) => {
  console.log('delete post 🟠')
  console.log('🐝 ~ file: postController.js ~ line 43 ~ reqID', req.currentUser)

  const isUserAdmin = req.currentUser.admin 
  console.log('🐝 ~ file: postController.js ~ line 47 ~ isUserAdmin', isUserAdmin)

  try {
    const { id } = req.params
    // const postToDelete = await Post.findById(id)
    const postToDelete = await Post.findById(id).populate('owner')
    console.log('🐝 ~ file: postController.js ~ postToDelete', postToDelete)

    const isUserOwner = postToDelete.owner.equals(req.currentUser._id)
    console.log('🐝 ~ file: postController.js ~ line 56 ~ isUserOwner', isUserOwner)

    if (!postToDelete) {
      throw new Error('🟥 no artwork found to delete 🟥 ')
    }

    if (!isUserAdmin && !isUserOwner){
      throw new Error('🟥 Not admin / owner - Unauthorized to delete 🟥' )
    }

    if (isUserAdmin === true ){
      postToDelete.remove()
      return res.status(200).json({ 'deleted': postToDelete })
    }


    postToDelete.remove()
    return res.status(200).json(postToDelete)

  } catch (err) {
    console.log('🛑 ~ postController.js ~ line 58 ~ err', err.message)
    return res.status(404).json( { message: err.message } )
  }
}

// !postToDelete.owner.equals(req.currentUser._id)