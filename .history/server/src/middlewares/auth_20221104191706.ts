import { NextFunction, Request, Response } from 'express';

import jwt from 'jsonwebtoken';
import { User } from '../entities/User';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    //만약에
    const user: User | undefined = res.locals.user;
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Someting went wrong' });
  }
};
