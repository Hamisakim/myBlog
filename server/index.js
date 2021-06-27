
import express from 'express'
import mongoose from 'mongoose'
import { port, dbURI } from './config/environment.js'
import router from './config/router.js'
//import Book from '../models/book.js'

const app = express()

const startServer = async() => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 Database has connected successfully')
    app.use(express.json())
    app.use((req,_res,next)=>{
      console.log(`🚨 Incoming  ${req.method} -> ${req.url}` )
      next()
    })
    app.use('/api', router)
    app.listen(port, () => console.log(`🚀 Express is up and running on ${port}`))
  }  catch (err) {
    console.log('😭 something went wrong starting the app ~ index.js')
    console.log(err)
  }
}
startServer()

