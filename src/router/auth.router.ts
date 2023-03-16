import express from 'express'
import { login, register } from '../controller/auth.controller'
import { checkJwt } from '../middleware/authorisationMiddleware'
import { encrypt } from '../middleware/encryptMiddleware'

export const router = express.Router()

router.post('/register', encrypt, register)
router.post('/login', encrypt, login)