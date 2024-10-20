import express from 'express'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import cors from 'cors'

const path = __dirname + '/app/views/'
const app = express()

app.use(cors())

app.use(express.static(path))

app.get('/', function (req, res) {
  res.sendFile(path + 'index.html')
})

// Enable CORS for all routes

// Serve static files from the Vue app
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
// Handle all other routes with the Vue app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
