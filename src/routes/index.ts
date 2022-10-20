import { Express } from 'express';
import apiRouter from './api';

export default (app: Express): void => {
  app.use('/api', apiRouter);
}