import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    MessageBody,
    ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { helloChatbot } from '@chatbot-core';

@WebSocketGateway({ cors: true })
export class ChatGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('message')
    async handleMessage(@MessageBody() message: string, @ConnectedSocket() client: Socket) {
        // chama seu bot
        const reply = await helloChatbot(message);

        // envia resposta para o mesmo cliente
        client.emit('message', reply);
    }
}