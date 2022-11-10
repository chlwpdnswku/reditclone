import { Request, Router, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../entities/User';

import userMiddleware from '../middlewares/user';
import authMiddleware from '../middlewares/auth';
// next해야 넘어감
const createSub = async (req: Request, res: Response, next) => {
  const { name, title, description } = req.body;

  //유저정보가있으면? 굉장히많은 핸들러에서 사용을 하기때문에 미들웨어로 생성해서 미들웨어에서 그냥 가져오자!
  //2가지 미들웨어만들기

  // 유저정보가 있다면 sub 이름과 제목이 이미 있는 것인지 체큰
};
// 프론트와연결하는 백엔드 api생성
const router = Router();

// 경로에들어오면 이 핸들러 호출 그니까 이 3가지를 가져와야됨
router.post('/', userMiddleware, authMiddleware, createSub);

export default router;
