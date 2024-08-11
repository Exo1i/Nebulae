import React, {useState, useRef, useEffect} from "react";
import sendToLLM from "./communicateWithLLM";
import Image from "next/image";
import {useTheme} from '@mui/material/styles';
import {CancelOutlined} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import {useAuth} from '@clerk/clerk-react';

export default function ChatBotOverlay({closeChatOverlay, isSignedIn, userID}) {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
    };

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const newMessage = {role: 'user', content: inputValue};
        setMessages(prevMessages => [...prevMessages, newMessage]);

        setInputValue('');
        setIsTyping(true);

        setMessages(prevMessages => [
            ...prevMessages,
            {role: 'assistant', content: '', loading: true}
        ]);


        try {
            let botResp = await sendToLLM([...messages, newMessage], isSignedIn, userID);

            setMessages(prevMessages => [
                ...prevMessages.slice(0, -1),
                {role: 'assistant', content: botResp},
            ]);
        } catch (error) {
            console.error("Error fetching bot response:", error);
            setMessages(prevMessages => [
                ...prevMessages.slice(0, -1),
                {role: 'assistant', content: 'Sorry, something went wrong. Please try again.'},
            ]);
        }

        setIsTyping(false);
    };

    return (
        <div
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                width: "90%",
                height: "80%",
                maxWidth: "400px",
                maxHeight: "600px",
                backgroundColor: isDarkMode ? '#1E1E1E' : '#F5F5F5',
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: `0 5px 20px ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                overflow: "hidden",
                transition: "all 0.3s ease",
                borderRadius: "12px",
                border: `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
            }}
        >
            <div
                style={{
                    padding: "15px",
                    textAlign: "center",
                    backgroundColor: isDarkMode ? '#2C2C2C' : '#FFFFFF',
                    borderBottom: `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
                }}
            >
                <CancelOutlined
                    onClick={closeChatOverlay}
                    style={{
                        position: "absolute",
                        top: "15px",
                        right: "15px",
                        cursor: "pointer",
                        color: isDarkMode ? '#FFF' : '#333',
                    }}
                />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image
                        src="/chatBotHeader.svg"
                        alt="Aries: AI Customer Support Image"
                        width={40}
                        height={40}
                        style={{objectFit: "contain"}}
                    />
                    <Typography variant={"h6"} color={isDarkMode ? 'invert(1)' : 'invert(0)'}>
                        Aries: AI Customer Support</Typography>
                </div>
            </div>

            <div
                style={{
                    flex: 1,
                    padding: "15px",
                    overflowY: "auto",
                }}
            >
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                            marginBottom: "10px",
                            animation: "fadeIn 0.5s ease",
                        }}
                    >
                        <div
                            style={{
                                maxWidth: "80%",
                                padding: "10px 12px",
                                borderRadius: msg.role === "user" ? "18px 18px 0 18px" : "18px 18px 18px 0",
                                backgroundColor: msg.role === "user" ? "#4A90E2" : (isDarkMode ? '#3A3A3A' : '#FFFFFF'),
                                color: msg.role === "user" ? '#FFFFFF' : (isDarkMode ? '#FFFFFF' : '#000000'),
                                boxShadow: `0 1px 2px ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                                wordWrap: "break-word",
                                position: "relative",
                            }}
                        >
                            {msg.loading && (
                                <div className="typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            )}
                            {!msg.loading && msg.content}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div
                style={{
                    position: "relative",
                    padding: "10px 15px",
                    backgroundColor: isDarkMode ? '#2C2C2C' : '#FFFFFF',
                    borderTop: `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
                }}
            >
                <input
                    id="promptField"
                    type="text"
                    placeholder="Ask a question..."
                    value={inputValue}
                    maxLength={500}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter" && !isTyping) {
                            handleSendMessage();
                        }
                    }}
                    style={{
                        width: "calc(100% - 40px)",
                        padding: "10px 35px 10px 10px",
                        borderRadius: "20px",
                        border: `1px solid ${isDarkMode ? '#555' : '#ddd'}`,
                        boxSizing: "border-box",
                        backgroundColor: isDarkMode ? '#3A3A3A' : '#F5F5F5',
                        color: isDarkMode ? '#FFF' : '#333',
                        fontSize: "16px",
                        transition: "all 0.3s ease",
                    }}
                />
                <button
                    onClick={handleSendMessage}
                    disabled={isTyping || inputValue.trim() === ""}
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "25px",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        transition: "opacity 0.3s ease",
                        opacity: isTyping || inputValue.trim() === "" ? 0.5 : 1,
                    }}
                >
                    <Image
                        src="/sendIcon.svg"
                        alt="Send"
                        width={20}
                        height={20}
                        style={{
                            filter: isDarkMode ? 'invert(100%)' : 'invert(0)'
                        }}
                    />
                </button>
            </div>

            <style jsx global>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .typing-indicator {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .typing-indicator span {
                    height: 6px;
                    width: 6px;
                    background-color: #999;
                    border-radius: 50%;
                    display: inline-block;
                    margin: 0 2px;
                    animation: typing 1s infinite ease-in-out;
                }

                .typing-indicator span:nth-child(2) {
                    animation-delay: 0.2s;
                }

                .typing-indicator span:nth-child(3) {
                    animation-delay: 0.4s;
                }

                @keyframes typing {
                    0% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-5px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }

                @media (max-width: 600px) {
                    div[style*="position: fixed"] {
                        width: 100% !important;
                        height: 70% !important;
                        max-width: none !important;
                        bottom: 0 !important;
                        right: 0 !important;
                        border-radius: 12px 12px 0 0 !important;
                    }
                }
            `}</style>
        </div>
    );
}
