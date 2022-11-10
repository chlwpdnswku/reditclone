import { NextFunction, Request, Response } from 'express';

import jwt from 'jsonwebtoken';
import { User } from '../entities/User';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    if (!token) return next();
    //  시크릿이랑 토크을이용해서 유저네임을 알아내고
    const { username }: any = jwt.verify(token, process.env.JWT_SECERT);
    const user = await User.findOneBy({ username });
    //확인해봤는데 유저가 없으면?
    if (!user) throw new Error('Unauthenticated');

    //유저정보를 여따가넣으면 언제든지 로컬에서 사용가능
    res.locals.user = user;
  } catch (error) {}
};
