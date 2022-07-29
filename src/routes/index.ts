import { Express } from 'express';
import mainRouter from './main';
import apiRouter from './api';

export default (app: Express): void => {
  app.use('/api', apiRouter);
  app.use('/', mainRouter);
}