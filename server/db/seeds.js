import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import userData from '../db/data/userData.js'
import User from '../models/userModel.js'

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