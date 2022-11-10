import { Router } from 'express';

// 프론트와연결하는 백엔드 api생성
const router = Router();

router.post('/', createSub);
