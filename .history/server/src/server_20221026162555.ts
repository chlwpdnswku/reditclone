import express from 'express';
import morgan from 'morgan';

const app = express();
// 미들웨어들을 하나씩 넣어주는거임 !

// json으로 번역
app.use(express.json());
// 다른 모드들이있는데 개발환경 데브옵션
app.use(morgan('dev'));
// app.
