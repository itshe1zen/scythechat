const chatBox = document.getElementById('chat-box');
const inputBox = document.getElementById('input-box');

function addMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

inputBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && inputBox.value.trim() !== '') {
        const message = inputBox.value.trim();
        addMessage(`You: ${message}`);
        inputBox.value = '';

        // Simulate a response
        setTimeout(() => {
            addMessage(`Anonymous: ${message}`);
        }, 1000);
    }
});
