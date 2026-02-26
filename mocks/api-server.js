// Mock server para desenvolvimento local
const express = require("express")
const cors = require("cors")
const fs = require("fs")
const path = require("path")

const app = express()
const PORT = 3002

app.use(cors())
app.use(express.json())

app.get("/api/config", (req, res) => {
  const tenantId = req.headers["x-tenant-id"] || "dev-tenant-001"
  const configPath = path.join(__dirname, "tenant-config.json")

  try {
    const config = JSON.parse(fs.readFileSync(configPath, "utf8"))
    res.json(config)
  } catch (error) {
    res.status(500).json({ error: "Config not found" })
  }
})

app.listen(PORT, () => {
  console.log(`Mock API server running on port ${PORT}`)
})
