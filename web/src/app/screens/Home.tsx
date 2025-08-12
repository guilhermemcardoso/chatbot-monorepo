'use client'

import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import ChatWindow from '../components/ChatWindow';
import ChatInput from '../components/ChatInput';

let socket: Socket;

export default function HomeScreen() {
    const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        socket = io('http://localhost:3000');

        socket.on('message', (msg: string) => {
            setMessages((prev) => [...prev, { text: msg, sender: 'bot' }]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    function sendMessage() {
        if (!input.trim()) return;
        setMessages((prev) => [...prev, { text: input, sender: 'user' }]);
        socket.emit('message', input);
        setInput('');
    }

    return (
        <main className="max-w-xl mx-auto p-4 flex flex-col h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Chat com Bot</h1>
            <ChatWindow messages={messages} />
            <ChatInput input={input} setInput={setInput} onSend={sendMessage} />
        </main>
    );
}
