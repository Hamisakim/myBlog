import Post from '../models/blogPostModel.js'

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('owner')
    return res.status(200).json(posts)
  } catch (error) {
    console.log('🟥 file: router.js ~ line 14 ~ error', error)
    return res.status(500).json('fuck')
  }
}

export const getOnePost = async (req, res) => {
  try {
    const { id } = req.params
    const singlePost = await Post.findById(id).populate('owner')
    if (!singlePost) {
      throw new Error('no post exists with that id')
    }
    return res.status(200).json(singlePost)
  } catch (error) {
    console.log('🟥 ~ file: router.js ~ line 45 ~ error', error)
    res.status(500).json(error.message)
  }
}

export const addPost = async (req, res) => {
  console.log('add post 🟢')
  try {
    const newPost = { ...req.body, owner: req.currentUser }
    const postToAdd = await Post.create(newPost)
    console.log('🐝 ~ file: router.js ~ line 26 ~ postToAdd', postToAdd)
    return res.status(202).json(postToAdd)
  } catch (error) {
    // console.log('🐝 ~ file: router.js ~ line 26 ~ error', error)
    res.status(422).json({ error: error.message })
    console.error()
  }
}

export const deletePost = async (req, res) => {
  console.log('delete post 🟠')
  try {
    const { id } = req.params
    const postToDelete = await Post.findById(id).populate('owner')
    const isUserAdmin = req.currentUser.admin
    const isUserOwner = postToDelete.owner.equals(req.currentUser._id)
    if (!postToDelete) {
      throw new Error('🟥 no post found to delete 🟥')
    }
    if (!isUserAdmin && !isUserOwner) {
      throw new Error('🟥 Not admin / owner - Unauthorized to delete 🟥')
    }
    if (isUserAdmin === true) {
      postToDelete.remove()
      return res.status(200).json({ 'deleted': postToDelete })
    }
    postToDelete.remove()
    return res.status(200).json(postToDelete)
  } catch (err) {
    console.log('🛑 ~ postController.js ~ line 58 ~ err', err.message)
    return res.status(500).json({ message: err.message })
  }
}

export const editPost = async (req, res) => {
  console.log('🟪 Edit post 🟪')
  try {
    const { id } = req.params
    const postToEdit = await Post.findById(id).populate('owner')
    if (!postToEdit) throw new Error('🟥 no post found to edit 🟥 ')
    Object.assign(postToEdit, req.body)
    Object.assign(postToEdit, { ...req.body, edited: true })
    await postToEdit.save()
    return res.status(202).json(postToEdit)
  } catch (error) {
    console.log('🐝 ~ file: postController.js ~ line 77 ~ error', error)
    return res.status(500).json({ message: error.message })
  }
}

// !postToDelete.owner.equals(req.currentUser._id)