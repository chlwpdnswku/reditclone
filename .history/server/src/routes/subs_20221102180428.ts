import { Request, Router, Response } from 'express';
import jwt from 'jsonwebtoken';
// next해야 넘어감
const createSub = async (req: Request, res: Response, next) => {
  const { name, title, description } = req.body;
};
// 프론트와연결하는 백엔드 api생성
const router = Router();

// 경로에들어오면 이 핸들러 호출
router.post('/', createSub);

export default router;
