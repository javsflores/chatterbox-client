var MessageView = {

  render: function(obj) {
    return `
    <div class="chat">
        <div class="username"><p>${obj.username}</p></div>
        <div><p>${obj.text}</p></div>
        <div><p>${obj.roomname}</p></div>
    </div>`;
  }
};