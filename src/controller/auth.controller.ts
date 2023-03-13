import { Request, Response } from "express";
import User from "../models/user.model";
import { createToken } from "../util/jwt";


export const register = async (req: Request, res: Response) => {
    const newUser = new User(req.body)
    try {
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
            console.log(typeof user._id);
            const token = createToken({ id: user._id, role: user.role })
            res.json(token)
        }


    } catch (err) {
        console.error(err)
        res.status(403).end()
    }




}