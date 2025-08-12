import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MessageProps {
    text: string;
    sender: 'user' | 'bot';
}

export default function Message({ text, sender }: MessageProps) {
    const isUser = sender === 'user';

    const components = {
        code: ({ inline, className, children, ...props }: any) => {
            if (inline) {
                return (
                    <code
                        className="bg-gray-200 text-red-600 rounded px-1 py-[2px] font-mono text-sm"
                        {...props}
                    >
                        {children}
                    </code>
                );
            }
            return (
                <pre className="bg-gray-800 text-white p-4 rounded overflow-auto" {...props}>
                    <code className={className}>{children}</code>
                </pre>
            );
        },
        a: ({ node, ...props }: any) => (
            <a
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            />
        ),
    };

    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
            <div
                className={`max-w-xs px-4 py-2 rounded-lg whitespace-pre-wrap ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'
                    }`}
            >
                <ReactMarkdown components={components}>{text}</ReactMarkdown>
            </div>
        </div>
    );
}
