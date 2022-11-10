import { Request, Router, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../entities/User';
// next해야 넘어감
const createSub = async (req: Request, res: Response, next) => {
  const { name, title, description } = req.body;

  const token = req.cookies.token;
  if (!token) return next();
  //  시크릿이랑 토크을이용해서 유저네임을 알아내고
  const { username }: any = jwt.verify(token, process.env.JWT_SECERT);
  const user = await User.findOneBy({ username });

  if (!user) throw new Error('Unauthenticated');
};
// 프론트와연결하는 백엔드 api생성
const router = Router();

// 경로에들어오면 이 핸들러 호출
router.post('/', createSub);

export default router;
