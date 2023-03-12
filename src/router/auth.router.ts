import express from 'express'
import { register } from '../controller/auth.controller'

export const router = express.Router()

router.post('/register', register)