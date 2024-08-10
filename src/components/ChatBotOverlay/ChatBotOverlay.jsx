import React, {useState} from "react";
import sendToLLM from "./communicateWithLLM";

export default function ChatBotOverlay({closeChatOverlay}) {
    const [messages, setMessages] = useState([]);  // State to hold all messages
    const [inputValue, setInputValue] = useState("");  // State for the input field
    const [isTyping, setIsTyping] = useState(false);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const newMessage = {role: 'user', content: inputValue};
        setMessages(prevMessages => [...prevMessages, newMessage]);

        setInputValue('');
        setIsTyping(true);

        // Add a loading message for the assistant's response
        setMessages(prevMessages => [
            ...prevMessages,
            {role: 'assistant', content: '', loading: true}
        ]);

        try {
            let botResp = await sendToLLM([...messages, newMessage]);

            setMessages(prevMessages => [
                ...prevMessages.slice(0, -1), // Remove the loading message
                {role: 'assistant', content: botResp},
            ]);
        } catch (error) {
            console.error("Error fetching bot response:", error);
            // Handle the error, e.g., show an error message in the chat
            setMessages(prevMessages => [
                ...prevMessages.slice(0, -1), // Remove the loading message
                {role: 'assistant', content: 'Sorry, something went wrong. Please try again.'},
            ]);
        }

        setIsTyping(false);
    };

    return (
        <div className="frame bg-white shadow-lg rounded-lg">
            <div
                className="div bg-white p-4 shadow-lg rounded-lg"
                style={{
                    height: "637px",
                    position: "fixed",
                    width: "464px",
                    bottom: "30px",
                    right: "30px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    paddingBottom: "20px",
                }}
            >
                {/* Exit icon at the top-right corner */}
                <img
                    src="/img/exitChatBotIcon.png"
                    alt="Exit ChatBotIcon"
                    style={{
                        width: "20px",
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        cursor: "pointer",
                    }}
                    onClick={closeChatOverlay}
                />

                {/* Top content */}
                <div
                    style={{
                        padding: "10px",
                        paddingTop: "30px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src="/img/chatBotHeader.svg"
                            alt="Aries: AI Customer Support Image"
                            style={{width: 50, objectFit: "contain"}}
                        />
                        <img
                            src="/img/AriesName.svg"
                            alt="AriesName"
                            style={{width: "300px", objectFit: "contain"}}
                        />
                    </div>
                </div>

                {/* Messages Container */}
                <div
                    style={{
                        flex: 1,
                        padding: "10px",
                        overflowY: "auto",
                        marginBottom: "10px",
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
                                    maxWidth: "70%",
                                    padding: "10px",
                                    borderRadius: "10px",
                                    backgroundColor: msg.role === "user" ? "#DCF8C6" : "#EAEAEA",
                                    wordWrap: "break-word", // Ensure text wraps inside the container
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

                {/* Input Field */}
                <div
                    style={{
                        position: "relative",
                        marginTop: "10px",
                        padding: "0 10px",
                    }}
                >
                    <input
                        id="promptField"
                        type="text"
                        placeholder="Ask a question..."
                        value={inputValue}
                        maxLength={500}  // Limit input to 500 characters
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(event) => {
                            if (event.keyCode === 13 && !isTyping) {
                                handleSendMessage();
                            }
                        }}
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "20px",
                            border: "1px solid #ddd",
                            boxSizing: "border-box",
                        }}
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={isTyping || inputValue.trim() === ""}
                        style={{
                            position: "absolute",
                            top: "50%",
                            right: "20px",
                            transform: "translateY(-50%)",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        <img
                            src="/img/sendIcon.svg"
                            alt="Send"
                            style={{width: "25px"}}
                        />
                    </button>
                </div>
            </div>

            {/* Spinner Styles */}
            <style>{`
                .spinner {
                    border: 4px solid rgba(0, 0, 0, 0.1);
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    border-left-color: #09f;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
