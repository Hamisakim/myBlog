import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import userData from '../db/data/userData.js'
import postsData from '../db/data/postsData.js'
import User from '../models/userModel.js'
import Post from '../models/blogPostModel.js'

const seedDataBase = async () => {

  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 Database has connected successfully')
    
    ///Drop Connection
    await mongoose.connection.db.dropDatabase()
    console.log('🟦  DB Dropped 🟦 ')
    
    

    /// Seed Users 🔷
    const users = await User.create(userData)
    console.log('🐝 ~ file: seeds.js ~ line 18 ~ users', users)
    console.log(`🌱 DB seeded with ${users.length} users`)
    


    const posts = await Post.create(postsData)
    console.log('🐝 ~ file: seeds.js ~ line 21 ~ posts', posts)
    console.log('🐝 ~ posts seeded', posts.length)
    



    /// Close Connection 
    await mongoose.connection.close()
    console.log('⬛️ DB Closed ⬛️ ')
  } catch (err) {
    console.log('🤖 ~ file: seeds.js ~ line 26 ~ err', err)
    await mongoose.connection.close()
    console.log('🟥 ERROR TERMINATED 🟥')
  }
}

seedDataBase()