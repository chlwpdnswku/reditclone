import { Router, Request, Response } from 'express';

// req res제대로 알고 배우기
const register = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;
  console.log('email', email);
};

const router = Router();

router.post('/register', register);

export default router;
