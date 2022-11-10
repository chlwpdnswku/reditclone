import { Request, Response } from 'express';

export default async (req: Request, res: Response, next: NewableFunction) => {
  try {
    const token = req.cookies.token;
    if (!token) return next();
    //  시크릿이랑 토크을이용해서 유저네임을 알아내고
    const { username }: any = jwt.verify(token, process.env.JWT_SECERT);
    const user = await User.findOneBy({ username });
    //확인해봤는데 유저가 없으면?
    if (!user) throw new Error('Unauthenticated');
  } catch (error) {}
};
