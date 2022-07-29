import App from './app';
import { serverSocket } from './socket';
import './config/env';

const httpServer = App.listen(process.env.WEBPORT, () => {
  console.log('Connected');
});
serverSocket(httpServer);