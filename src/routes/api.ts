import { Router, Request, Response } from 'express';
import '../config/env';

const router = Router();

router
.get('/key', (req: Request, res: Response) => {
  res.json({
    key: encodeURIComponent(process.env.ODsayAPIKEY as string)
  });
})

export default router;