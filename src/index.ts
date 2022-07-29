import App from './app';
import { serverSocket } from './socket';

const httpServer = App.listen(3000, () => {
  console.log('Connected');
});
serverSocket(httpServer);