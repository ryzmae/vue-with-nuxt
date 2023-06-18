import { Request, Response, NextFunction } from 'express';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    if (!req.sesion || !req.session.user) {
        return res.status(401).send({
        error: 'Unauthorized',
        });
    }
    next();
}