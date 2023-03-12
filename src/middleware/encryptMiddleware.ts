import { createHmac } from "crypto";
import { NextFunction, Request, Response } from "express";

export const encrypt = (req: Request, res: Response, next: NextFunction) => {
    const hmac = createHmac('sha256', req.body.password).digest('hex')
    req.body.password = hmac
    next()
}