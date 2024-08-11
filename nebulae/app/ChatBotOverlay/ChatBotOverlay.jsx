import React, {useState} from "react";
import sendToLLM from "./communicateWithLLM";
import Image from "next/image";
import {useTheme} from '@mui/material/styles';
import {CancelOutlined} from "@mui/icons-material";

export default function ChatBotOverlay({closeChatOverlay}) {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

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
            let botResp = await sendToLLM([...messages, newMessage]);

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
                height: "80vh",
                maxWidth: "600px",
                minWidth: "25vw",
                position: "fixed",
                bottom: "30px",
                right: "30px",
                borderRadius: "8px",
                border: `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
                backgroundColor: isDarkMode ? '#333' : '#fff',
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingBottom: "20px",
                boxShadow: `0 0 10px ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'}`,
                resize: "both",
                overflow: "hidden",
            }}
        >
            <CancelOutlined
                onClick={closeChatOverlay}
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    cursor: "pointer",
                    filter: !isDarkMode ? 'invert(1)' : 'invert(0)'
                }}
            />
            <div
                style={{
                    padding: "10px",
                    paddingTop: "30px",
                    textAlign: "center"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "10px"
                    }}
                >
                    <Image
                        src="/chatBotHeader.svg"
                        alt="Aries: AI Customer Support Image"
                        width={50}
                        height={50}
                        style={{objectFit: "contain"}}
                    />
                    <Image
                        src="/AriesName.svg"
                        alt="AriesName"
                        width={200}
                        height={30}
                        style={{
                            objectFit: "contain",
                            filter: isDarkMode ? 'invert(1)' : 'invert(0)',
                            marginLeft: "10px"
                        }}
                    />
                </div>
            </div>

            <div
                style={{
                    flex: 1,
                    padding: "10px",
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
                        }}
                    >
                        <div
                            style={{
                                maxWidth: "80%",
                                padding: "10px",
                                borderRadius: "10px",
                                backgroundColor: msg.role === "user" ? (isDarkMode ? "rgba(66,207,250,0.58)" : '#DCF8C6') : (isDarkMode ? '#555' : '#EAEAEA'),
                                color: isDarkMode ? '#ffffff' : '#000',
                                wordWrap: "break-word",
                                position: "relative",
                            }}
                        >
                            {msg.loading && (
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                    }}
                                >
                                    <div className="spinner" />
                                </div>
                            )}
                            {!msg.loading && msg.content}
                        </div>
                    </div>
                ))}
            </div>

            <div
                style={{
                    position: "relative",
                    padding: "0 10px",
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
                        if (event.keyCode === 13 && !isTyping) {
                            handleSendMessage();
                        }
                    }}
                    style={{
                        width: "calc(100% - 50px)",
                        padding: "10px",
                        borderRadius: "20px",
                        border: `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
                        boxSizing: "border-box",
                        backgroundColor: isDarkMode ? '#555' : '#fff',
                        color: isDarkMode ? '#fff' : '#000'
                    }}
                />
                <button
                    onClick={handleSendMessage}
                    disabled={isTyping || inputValue.trim() === ""}
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    <Image
                        src="/sendIcon.svg"
                        alt="Send"
                        width={25}
                        height={25}
                        style={{
                            filter: isDarkMode ? 'invert(100%)' : 'invert(0)'
                        }}
                    />
                </button>
            </div>
        </div>
    );
}
