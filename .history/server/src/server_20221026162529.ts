import express from 'express';
import morgan from 'morgan';

const app = express();
// 미들웨어들을 하나씩 넣어주는거임 !

// json으로 번역
app.use(express.json());
app.use(morgan('dev'));
