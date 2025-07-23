// components/AIAssistant.js
import React, { useState } from 'react';

const AIAssistant = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messages, setMessages] = useState([{
        type: 'left',
        avatar: 'https://i.pravatar.cc/40?img=26',
        name: 'ИИ Ассистент',
        text: 'Здравствуйте! Чем я могу вам помочь сегодня?',
        time: '—'
    }]);
    const [inputMessage, setInputMessage] = useState('');

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            setMessages([...messages, {
                type: 'right',
                text: inputMessage,
                time: new Date().toLocaleTimeString()
            }]);
            setInputMessage('');
        }
    };

    return (
        <>
            <section className="chat">
                <h2>ИИ ассистент</h2>
                <div className="chat-message">
                    <strong>Чат с ии</strong>
                    <p>Здравствуйте! Чем я могу вам помочь сегодня?</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="chat-button"
                    style={{
                        padding: '0.8rem 0.5rem',
                        backgroundColor: '#002c6a',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>
                    Открыть чат
                </button>
            </section>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            ИИ ассистент
                            <button
                                className="close-button"
                                onClick={() => setIsModalOpen(false)}>
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <div id="chatBox">
                                {messages.map((message, index) => (
                                    <div key={index} className={`message ${message.type}`}>
                                        {message.avatar && <img src={message.avatar} alt="avatar" />}
                                        <div className="bubble">
                                            {message.name && <div className="name">{message.name}</div>}
                                            <div className="text">{message.text}</div>
                                            <div className="time">{message.time}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <input
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Введите сообщение…"
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            />
                            <button onClick={handleSendMessage}>Отправить</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIAssistant;