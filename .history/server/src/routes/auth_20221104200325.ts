import { isEmpty, validate } from 'class-validator';
import { Router, Request, Response } from 'express';
import { User } from '../entities/User';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const mapErrors = (errors: Object[]) => {
  return errors.reduce((prev: any, err: any) => {
    prev[err.property] = Object.entries(err.constraints)[0][1];
    return prev;
  });
};

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
    // Objectkey는 이메일과 유저네임
    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
      console.log(Object);
    }

    // 만약에 둘 다 없다면 저장을 해줌 유저 인스턴스 생성
    const user = new User();
    user.email = email;
    user.username = username;
    user.password = password;

    // 엔티티에 정해 놓은 조건으로 user 데이터의 유효성 검사를 해줌
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
    // 서버에서난 500번에러코드임
    return res.status(500).json({ error });
  }
};

const router = Router();

const login = async (req: Request, res: Response) => {
  // 클라이언트에서 온 것들이 req.body에있음
  const { username, password } = req.body;

  try {
    let errors: any = {};
    // 비워져있다면 에러를 프론트엔드로 보내주기
    if (isEmpty(username)) errors.username = '사용자 이름은 비워둘수 없습니다';
    if (isEmpty(password)) errors.password = '비밀번호는 비워둘 수 없습니다.';
    // 에러가있으면 400 오류(클라이언트오류인가?)를 해줌
    if (Object.keys(errors).length > 0) {
      // 클라이언트 오류
      return res.status(400).json(errors);
    }
    // 디비에서 유저찾기
    const user = await User.findOneBy({ username });

    // 유저가없다면
    if (!user)
      return res
        .status(404)
        .json({ username: '사용자 이름이  등록되지 않았습니다.' });

    // 유저가있다면 비밀번호 비교하기 클라이언트에있는 패스워드랑 DB에있는 패스워드 비교
    const passwordMatches = await bcrypt.compare(password, user.password);
    // 비밀번호가 다르다면 에러보내기
    if (!passwordMatches) {
      return res.status(401).json({ password: '비밀번호가 잘못되었습니다.' });
    }

    // 비밀번호가 맞다면 토큰생성
    const token = jwt.sign({ username }, process.env.JWT_SECRET);

    // 쿠기 저장 옵션에도 줘야하는데 일단은 만듬
    // 쿠키저장 세션
    res.set(
      'Set-Cookie',
      cookie.serialize('token', token, {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      })
    );
    // 유저랑 토큰을 보내주고

    return res.json({ user, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

router.post('/register', register);
router.post('/login', login);

export default router;
