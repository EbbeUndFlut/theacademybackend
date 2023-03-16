import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../util/jwt";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.lmsshorttoken
        verifyToken(token)
        next()
    } catch (err) {
        res.status(402).end()
    }


}