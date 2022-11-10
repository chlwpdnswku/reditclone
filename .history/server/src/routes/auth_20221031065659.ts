import { validate } from 'class-validator';
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

    // 에러가있다면 return 으로 에러를 response 보내줌 리턴이있다면 에러에서 끊어줌
    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }
    // 만약에둘다없다면 저장을해줌 인스턴스 ->엔티디이용
    const user = new User();
    user.email = email;
    user.username = username;
    user.password = password;

    // 엔티티에 정해놓은 조건으로 user 데이터의 유효성 검사를 해줌
    // 이게 User.ts에있는 validate를 계속 체크르함
    errors = await validate(user);
    // console.log('errors', errors);
    // 유효성 검사 에러 처리하기
    if (errors.length > 0) return res.status(400).json(mapErrors(errors));

    // 유저정보를 user table에 저장 base entitiy에서 가져옴
    await user.save();
    // 저장된 걸 다시 유저 보내온곳에 전달 res로 전달
    return res.json(user);
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error });
  }
};

const router = Router();

router.post('/register', register);

export default router;
