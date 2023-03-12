import express from 'express'
import './config/config'

import { router as authRouter } from './router/auth.router'

const app = express()
const PORT = process.env.PORT

app.use(authRouter)

app.listen(PORT, () => console.log("running", PORT))