interface ChatInputProps {
    input: string;
    setInput: (value: string) => void;
    onSend: () => void;
}

export default function ChatInput({ input, setInput, onSend }: ChatInputProps) {
    return (
        <div className="flex space-x-2 mt-4">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSend()}
                className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Digite sua mensagem..."
            />
            <button
                onClick={onSend}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Enviar
            </button>
        </div>
    );
}
