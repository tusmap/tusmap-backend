import { Express } from 'express';
import mainRouter from './main';

export default (app: Express): void => {
  app.use('/', mainRouter);
}