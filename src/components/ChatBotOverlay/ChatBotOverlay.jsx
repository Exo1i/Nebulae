import React from "react";

export default function ChatBotOverlay({closeChatBotOverlay}) {
    function sendMessageToBot() {
    //     
    }

    return (
        <div className="frame bg-white shadow-lg rounded-lg">
            <div className="div bg-white p-4 shadow-lg rounded-lg" style={{
                height: "637px",
                position: 'fixed',
                width: '464px',
                bottom: '30px',
                right: '30px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',  // Distribute space between items
                paddingBottom: '20px',  // Ensure there's some space at the bottom
            }}>

                {/* Top content */}
                <div style={{
                    padding: '10px',
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <img src="/img/chatBotHeader.svg" alt="Aries: AI Customer Support Image"
                             style={{width: 50, objectFit: 'contain'}} />
                        <img src="/img/AriesName.svg" alt="AriesName"
                             style={{width: '300px', objectFit: 'contain'}} />
                        <img src="/img/exitChatBotIcon.png" alt="Exit ChatBotIcon" style={{
                            width: "20px",
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            cursor: 'pointer'
                        }} onClick={closeChatBotOverlay} />
                    </div>
                </div>

                {/* Bottom content */}
                <div>
                    <hr style={{
                        width: '100%',
                        margin: '20px 0',
                        border: 'none',
                        borderTop: '1px solid #ddd',
                    }} />
                    <div style={{
                        position: 'relative',
                        marginTop: '20px',
                    }}>
                        <img onClick={sendMessageToBot} src="/img/sendIcon.svg" alt="SendIcon" style={{
                            position: 'absolute',
                            top: '50%',
                            right: '10px',
                            transform: 'translateY(-50%)',
                            zIndex: 1,
                            cursor: 'pointer',
                        }} />
                        <input id="promptField" type="text" placeholder="Ask a question..." style={{
                            width: '100%',
                            padding: '10px 40px 10px 40px',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            boxSizing: 'border-box',
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );
};
