import mongoose from 'mongoose'


const post = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 60 },
  text: { type: String, required: false, maxlength: 1000 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true  },
},
{ timestamps: true }
)
post.set('toJSON', { virtuals: true })

export default mongoose.model('Post', post)
