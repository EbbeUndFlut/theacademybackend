import express from 'express'
import './config/config'

const app = express()
const PORT = process.env.PORT

app.listen(PORT, () => console.log("running", PORT))