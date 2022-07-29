import { Router, Request, Response } from 'express';
import path from 'path';
import '../config/env';

const router = Router();

router
.get('/key', (req: Request, res: Response) => {
  res.json({
    key: process.env.ODsayAPIKEY
  });
})

export default router;