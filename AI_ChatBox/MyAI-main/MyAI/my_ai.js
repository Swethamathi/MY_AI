const chatBox = document.querySelector('.msger-chat');
const userInput = document.querySelector('.msger-input');
const chatForm = document.querySelector('.msger-inputarea');

chatForm.addEventListener('submit', event => {
    event.preventDefault();
    const message = userInput.value.trim();
    if (message) {
        addMessageToChat('right-msg', 'Me👩', message);
        userInput.value = '';
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessageToChat('left-msg', 'MyAI🤖', response);
        }, 500);
    }
});

function addMessageToChat(senderClass, senderName, message) {
    const msgTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const msgHTML = `
        <div class="msg ${senderClass}">
            <div class="msg-img" style="background-image: url(${senderClass === 'right-msg' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73N1kzdazZtw16WtpCwDlZYHAMUs-RcC6Uw&s' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRgqoz5DC3C3WdlGdFPsqnKMKVwv_P-4ybg&s'})"></div>
            <div class="msg-bubble">
                <div class="msg-info">
                    <div class="msg-info-name">${senderName}</div>
                    <div class="msg-info-time">${msgTime}</div>
                </div>
                <div class="msg-text">${message}</div>
            </div>
        </div>
    `;
    chatBox.insertAdjacentHTML('beforeend', msgHTML);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    const msg = message.toLowerCase();
    if (msg.includes('hello') || msg.includes('hi')) {
        return 'Hello! How can I assist you today?';
    } else if (msg.includes('how are you')) {
        return 'I am just a bot, but I am here to help you!';
    } else if (msg.includes('name')) {
        return 'I am a simple chatbot created to assist you.';
    } else if (msg.includes('help')) {
        return 'Sure, I am here to help. What do you need assistance with?';
    } else {
        return 'I am not sure how to respond to that. Can you please rephrase?';
    }
}
