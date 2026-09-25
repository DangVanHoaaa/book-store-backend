require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))
app.use('/', routes)


// Kết nối DB rồi mới start server
const PORT = process.env.PORT || 3000
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server chạy tại http://localhost:${PORT}`)
  })
})