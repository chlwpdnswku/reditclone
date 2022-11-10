import { Router, Request, Response } from 'express';


// req res제대로 알고 배우기 type도 안에있음
const register = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;
  console.log('email', email);
  try {
    let errors: any = {};
    // 이메일과 유저이름이 이미 저장 사용되고 있는 것인지 확인
    const emailUser= await User.
  } catch (error) {}
};

const router = Router();

router.post('/register', register);

export default router;
