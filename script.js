const chatBox = document.getElementById('chat-box');
const inputBox = document.getElementById('input-box');

function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

inputBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && inputBox.value.trim() !== '') {
        const message = inputBox.value.trim();
        addMessage('You', message);
        inputBox.value = '';

        // Simulate a response
        setTimeout(() => {
            // Example response that does not simply repeat the user's message
            const response = getRandomResponse();
            addMessage('Anonymous', response);
        }, 1000);
    }
});

function getRandomResponse() {
    const responses = [
        "Hello!",
        "How can I help you?",
        "That's interesting.",
        "Tell me more!",
        "I see.",
        "Could you elaborate?",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}
