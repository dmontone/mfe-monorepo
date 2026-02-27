const express = require('express')

const app = express()
const PORT = 3002

app.get('/', (_, res) => {
  res.json({ message: 'hello world' })
})

app.listen(PORT, () => {
  console.log(`Mock API server running on port ${PORT}`)
})
