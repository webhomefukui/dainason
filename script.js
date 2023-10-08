function sendMessage() {
    var username = document.getElementById('username').value;
    var message = document.getElementById('message').value;

    if (username && message) {
        var now = new Date();
        var timestamp = now.toLocaleString();
        var messageDiv = document.createElement('div');
        messageDiv.classList.add('message');

        var content = `<span class="username">${username}</span>${message}<div class="timestamp">${timestamp}</div>`;
        messageDiv.innerHTML = content;

        document.getElementById('messages').appendChild(messageDiv);

        document.getElementById('username').value = '';
        document.getElementById('message').value = '';
    }
}

