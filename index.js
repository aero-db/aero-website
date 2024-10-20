import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import cors from 'cors'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

// Enable CORS for all routes
app.use(cors())

// Serve static files from the Vue app
app.use(express.static(path.join(__dirname, 'dist')))

// Handle all other routes with the Vue app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
