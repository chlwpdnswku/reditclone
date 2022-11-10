import express from 'express';
import morgan from 'morgan';
import { AppDataSource } from './data-source';
import authRoutes from './routes/auth';
import subRoutes from './routes/subs';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
const app = express();
// 미들웨어들을 하나씩 넣어주는거임 !
const origin = 'http://localhost:3000';
app.use(
  cors({
    origin,
    credentials: true,
  })
);

// json으로 번역
app.use(express.json());
// 다른 모드들이있는데 개발환경 데브옵션
app.use(morgan('dev'));
app.use(cookieParser());
// app.get의 url접속을 하면 해당 블록코드를 실행
app.get('/', (_, res) => res.send('running'));
// 경로 라우터 만들기
app.use('/api/auth', authRoutes);
app.use('/api/subs', subRoutes);
dotenv.config();

let port = 4000;

app.listen(port, async () => {
  console.log(`server running at http://localhost:${port}`);
  // 데이터베이스 커넥션을 넣어줌

  AppDataSource.initialize()
    .then(() => {
      console.log('initaionlized data');
    })
    .catch((error) => console.log(error));
});
