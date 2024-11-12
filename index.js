import express from 'express'

import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename) // get the name of the directory

const app = express()

app.use(cors())

app.use(express.static('/dist'))

app.get('/', function (req, res) {
  res.sendFile(path + 'index.html')
})

// Enable CORS for all routes

// Serve static files from the Vue app
app.use(express.static(path.join(__dirname, 'dist')))

// Handle all other routes with the Vue app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
