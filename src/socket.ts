import { Socket, Server } from 'socket.io';

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({credentials: true}));

export const serverSocket = (httpServer: any) => {
  const io = new Server(httpServer, {
    cors: {credentials: true},
  });

  io.on('connection', connectHandler);
};

function connectHandler(socket: Socket) {
  socket.on('join', data => {
    socket.join(data + 'tusMap');
  });

  socket.on('currentLocation', data => {
    socket.to(data.id).emit('setPosition', data);
  });
}