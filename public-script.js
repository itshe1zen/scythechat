const socket = new WebSocket('ws://localhost:3000');

socket.onmessage = function(event) {
    const terminalOutput = document.getElementById('terminalOutput');
    const message = document.createElement('div');
    message.textContent = event.data;
    terminalOutput.appendChild(message);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

document.getElementById('chatInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('chatInput');
        if (input.value.trim() !== '') {
            socket.send(input.value);
            input.value = '';
        }
    }
});
