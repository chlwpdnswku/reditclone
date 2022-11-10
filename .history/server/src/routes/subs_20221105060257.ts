import { Request, Router, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../entities/User';

import userMiddleware from '../middlewares/user';
import authMiddleware from '../middlewares/auth';
import { isEmpty } from 'class-validator';
import { AppDataSource } from '../data-source';
import { off } from 'process';
// next해야 넘어감
const createSub = async (req: Request, res: Response, next) => {
  const { name, title, description } = req.body;

  //유저정보가있으면? 굉장히많은 핸들러에서 사용을 하기때문에 미들웨어로 생성해서 미들웨어에서 그냥 가져오자!
  //2가지 미들웨어만들기

  try {
    let errors: any = {};
    if (isEmpty(name)) errors.name = '이름 비워두면 클남';
    if (isEmpty(title)) errors.title = '타이틀 비우면 혼남';
    // 유저정보가 있다면 sub 이름과 제목이 이미 있는 것인지 체크
    // https://orkhan.gitbook.io/typeorm/docs/select-query-builder 쿼리빌더

    const sub = await AppDataSource.getRepository(Sub)
      .createQueryBuilder('sub')
      .where('lower(sub.name) = :name', { name: name.toLowerCase() })
      .getOne();

    if (sub) errors.name = '서브가 이미 존재';

    if (Object.keys(errors).length > 0) {
      throw errors;
    }
  } catch (error) {}
};
// 프론트와연결하는 백엔드 api생성
const router = Router();

// 경로에들어오면 이 핸들러 호출 그니까 이 3가지를 가져와야됨
router.post('/', userMiddleware, authMiddleware, createSub);

export default router;
