import { Router, Request, Response } from 'express';
import path from 'path';

const router = Router();

router
.get('/', (req: Request, res: Response) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public/html') });
})

export default router;