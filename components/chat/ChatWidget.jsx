'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Pre-defined questions and answers
const questionSet = [
  {
    question: "What are your technical skills?",
    answer: "I'm proficient in modern web development including React, Next.js, Node.js, and Tailwind CSS. I also have experience with Python, SQL, and various backend frameworks. Check out my /skills page for a detailed breakdown!"
  },
  {
    question: "Do you have any project experience?",
    answer: "Absolutely! I've built several projects including [Project 1], [Project 2], and this portfolio site itself. You can see all my work on the /projects page."
  },
  {
    question: "Are you available for freelance work?",
    answer: "I'm currently available for select freelance projects. Feel free to send me a message via the /contact form and we can discuss your idea!"
  },
  {
    question: "How can I contact you?",
    answer: "The best way to reach me is via email at your.email@domain.com or through the contact form on this site. I'm also on LinkedIn and GitHub."
  }
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const chatWindowRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Initialize position on component mount
  useEffect(() => {
    setPosition({ x: window.innerWidth - 400, y: window.innerHeight - 500 });
  }, []);

  // Auto-scroll to the bottom of the chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  // Handle drag start
  const handleDragStart = (e) => {
    if (e.target.closest('input, button, a')) return;
    
    setIsDragging(true);
    const rect = chatWindowRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchmove', handleDrag);
    document.addEventListener('touchend', handleDragEnd);
  };

  // Handle dragging
  const handleDrag = (e) => {
    if (!isDragging) return;
    
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const newX = clientX - dragOffset.x;
    const newY = clientY - dragOffset.y;
    
    const maxX = window.innerWidth - (chatWindowRef.current?.offsetWidth || 320);
    const maxY = window.innerHeight - (chatWindowRef.current?.offsetHeight || 384);
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleDragEnd);
    document.removeEventListener('touchmove', handleDrag);
    document.removeEventListener('touchend', handleDragEnd);
  };

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newUserMessage = { text: userInput, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setUserInput('');

    setMessages((prevMessages) => [...prevMessages, { text: '...', sender: 'bot', isTyping: true }]);

    setTimeout(() => {
      const foundAnswer = questionSet.find(item =>
        item.question.toLowerCase().includes(userInput.toLowerCase()) ||
        userInput.toLowerCase().includes(item.question.toLowerCase())
      );

      const botResponse = {
        text: foundAnswer ? foundAnswer.answer : "I'm not sure how to answer that yet. Try asking about my skills, projects, or availability!",
        sender: 'bot'
      };

      setMessages((prevMessages) => [
        ...prevMessages.filter(msg => !msg.isTyping),
        botResponse
      ]);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="bg-black text-white p-4 rounded-full shadow-lg flex items-center justify-center pointer-events-auto fixed bottom-6 right-6 border border-gray-600"
            style={{ cursor: 'grab' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatWindowRef}
            initial={{ opacity: 0, scale: 0.6, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 50 }}
            className="bg-white text-black w-80 h-96 rounded-2xl shadow-xl flex flex-col border-2 border-gray-800 pointer-events-auto fixed"
            style={{
              left: position.x,
              top: position.y,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            {/* Header - Drag handle */}
            <div 
              className="bg-black text-white p-4 rounded-t-2xl flex justify-between items-center cursor-move border-b-2 border-gray-600"
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              <span className="font-semibold">Portfolio Assistant</span>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white hover:text-gray-300 ml-4 transition-colors"
                onMouseDown={(e) => e.stopPropagation()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Message Container */}
            <div className="flex-1 p-4 overflow-y-auto bg-white">
              {messages.length === 0 ? (
                <div className="text-center text-gray-600 my-4">
                  Hi there! Ask me about my skills, projects, or how to contact me.
                </div>
              ) : (
                messages.map((message, index) => (
                  <Message key={index} message={message} />
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="px-4 py-2 border-t-2 border-gray-300 flex flex-wrap gap-2 bg-gray-100">
              {questionSet.map((qna, index) => (
                <button
                  key={index}
                  onClick={() => setUserInput(qna.question)}
                  className="text-xs bg-gray-300 text-black hover:bg-gray-400 px-2 py-1 rounded-full border border-gray-400 transition-colors"
                >
                  {qna.question}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-4 border-t-2 border-gray-300 bg-gray-100">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-white text-black rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black border-2 border-gray-400"
                />
                <button
                  type="submit"
                  className="bg-black text-white rounded-full p-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black border-2 border-gray-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Sub-component for individual messages with animation
function Message({ message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-xs px-4 py-2 rounded-2xl border-2 ${
          message.sender === 'user'
            ? 'bg-black text-white border-gray-600 rounded-br-none'
            : 'bg-gray-200 text-black border-gray-400 rounded-bl-none'
        }`}
      >
        {message.isTyping ? (
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        ) : (
          message.text
        )}
      </div>
    </motion.div>
  );
}