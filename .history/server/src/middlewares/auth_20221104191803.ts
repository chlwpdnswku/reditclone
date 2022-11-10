import { NextFunction, Request, Response } from 'express';

import jwt from 'jsonwebtoken';
import { User } from '../entities/User';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    //만약에 User가 잘 있으면 뭐뜨겠지 아님 말고임
    const user: User | undefined = res.locals.user;

    if (!user) throw new Error('Unauthenticated');
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Someting went wrong' });
  }
};
