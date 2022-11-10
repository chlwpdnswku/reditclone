import { Router, Request, Response } from 'express';
import { User } from '../entities/User';

// req res제대로 알고 배우기 type도 안에있음
const register = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;
  console.log('email', email);
  try {
    let errors: any = {};
    // 이메일과 유저이름이 이미 저장 사용되고 있는 것인지 확인  찾으면 여기에들어옴
    const emailUser = await User.findOneBy({ email });
    const usernameUser = await User.findOneBy({ username });
    // 이미 있다면 errors객체에 넣어줌
  } catch (error) {}
};

const router = Router();

router.post('/register', register);

export default router;
