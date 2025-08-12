import Message from './Message';

interface ChatWindowProps {
    messages: { text: string; sender: 'user' | 'bot' }[];
}

export default function ChatWindow({ messages }: ChatWindowProps) {
    return (
        <div className="flex flex-col p-4 border rounded-lg h-[400px] overflow-y-auto bg-white">
            {messages.map((msg, i) => (
                <Message key={i} text={msg.text} sender={msg.sender} />
            ))}
        </div>
    );
}
