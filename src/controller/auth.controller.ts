import { Request, Response } from "express";
import User from "../models/user.model";
import { createToken } from "../util/jwt";

const cookieOptions = {
    httpOnly: true,
    secure: true
}

export const register = async (req: Request, res: Response) => {
    const newUser = new User(req.body)
    try {
        newUser.avatar = 'https://api.dicebear.com/5.x/identicon/svg?seed=' + newUser.email
        await newUser.save()
        res.status(200).end()
    } catch (err) {
        console.error(err)
        res.status(401).end()
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne(req.body)
        if (user === null) {
            res.status(403).end()
        } else {
            const token = createToken({ id: user._id, role: user.role })
            res.cookie('lmsshorttoken', token, cookieOptions)
            user.lastLogin = new Date()
            user.save()
            res.json(token)
        }


    } catch (err) {
        console.error(err)
        res.status(403).end()
    }




}