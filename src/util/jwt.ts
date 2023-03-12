import jwt from 'jsonwebtoken'

export const createToken = (payload: { id: string, role: string }) => {
    return jwt.sign(payload, process.env.JWT_SECRET || " ", { expiresIn: '20min' })
}