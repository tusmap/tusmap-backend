import { Router, Request, Response } from 'express';
import axios from 'axios';
import '../config/env';

const ODsay = axios.create({
  baseURL: 'https://api.odsay.com/v1/api',
  timeout: 2000,
});

const apiKey = encodeURIComponent(process.env.ODsayAPIKEY as string);

const router = Router();

router
.post('/searchTransPath', async (req: Request, res: Response) => {
  const { SX, SY, EX, EY } = req.body;

  const { data } = await ODsay.get(`/searchPubTransPath?SX=${SX}&SY=${SY}&EX=${EX}&EY=${EY}&apiKey=${apiKey}`);

  res.json({
    data
  });
})

.post('/loadLane', async (req: Request, res: Response) => {
  const { mapObject } = req.body;
  
  const { data } = await ODsay.get(`/loadLane?mapObject=0:0@${mapObject}&apiKey=${apiKey}`);

  res.json({
    data
  });
})

.post('/post', async (req: Request, res: Response) => {
  axios.get(req.body.url).then(data => {
    console.log(data.data);
    res.json(data.data);
  });
});

export default router;