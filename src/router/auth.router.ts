import express from 'express'
import { login, register } from '../controller/auth.controller'
import { encrypt } from '../middleware/encryptMiddleware'

export const router = express.Router()

router.post('/register', encrypt, register)
router.post('/login', encrypt, login)