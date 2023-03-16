import express from 'express'
import cookieParser from 'cookie-parser'
import './config/config'
import './config/db'

import { router as authRouter } from './router/auth.router'

const app = express()
const PORT = process.env.PORT

app.use(cookieParser())
app.use(express.json())

app.use('/api/v1', authRouter)

app.listen(PORT, () => console.log("running", PORT))