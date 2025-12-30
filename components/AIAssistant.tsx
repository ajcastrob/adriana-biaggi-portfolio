import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Hello, I am Adriana’s virtual assistant. How can I help you today? You can ask me about her experience, projects, or availability.',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(input);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 bg-stone-900 text-stone-50 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 ${isOpen ? 'hidden' : 'flex'} items-center gap-2 group`}
        aria-label="Open assistant"
      >
        <Sparkles size={20} className="animate-pulse" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium">
          Ask me anything
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-4 md:right-8 w-[90vw] md:w-96 h-[500px] bg-white shadow-2xl rounded-2xl z-50 flex flex-col border border-stone-100 animate-[fadeIn_0.3s_ease-out]">
          {/* Header */}
          <div className="p-4 bg-stone-900 text-stone-50 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles size={18} />
              <h3 className="font-serif italic tracking-wide">Adriana AI</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-stone-300">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 text-sm leading-relaxed rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-stone-900 text-stone-50 rounded-tr-none'
                      : 'bg-white border border-stone-200 text-stone-800 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-stone-400" />
                  <span className="text-xs text-stone-400">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-stone-100 rounded-b-2xl">
            <div className="flex items-center gap-2 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your question..."
                className="w-full bg-stone-50 border-none rounded-full py-3 pl-4 pr-12 text-sm focus:ring-1 focus:ring-stone-300 outline-none"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 p-2 bg-stone-900 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-stone-700 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="text-center mt-2">
               <span className="text-[10px] text-stone-400">Powered by Google Gemini</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;