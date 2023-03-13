import jwt from 'jsonwebtoken'

export const createToken = (payload: { id: any, role: string | undefined }) => {
    return jwt.sign(payload, process.env.JWT_SECRET || " ", { expiresIn: '20min' })
}