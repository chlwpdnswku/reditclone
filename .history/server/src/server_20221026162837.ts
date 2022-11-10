import express from 'express';
import morgan from 'morgan';

const app = express();
// 미들웨어들을 하나씩 넣어주는거임 !

// json으로 번역
app.use(express.json());
// 다른 모드들이있는데 개발환경 데브옵션

app.use(morgan('dev'));
// app.get의 url접속을 하면 해당 블록코드를 실행
app.get('/', (_, res) => res.send('running'));

let port = 4000;
