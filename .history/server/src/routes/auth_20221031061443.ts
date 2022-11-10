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
    if (emailUser) errors.email = '이미 해당 이메일 주소가 사용';
    if (usernameUser) errors.username = '이미 이 사용자 이름이 사용되었습니다';

    // 에러가있다면 return 으로 에러를 response 보내줌.
    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }
  } catch (error) {}
};

const router = Router();

router.post('/register', register);

export default router;
