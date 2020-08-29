var MessageView = {

  render: function(obj) {
    return `
    <div class="chat">
        <div class="username"><p>${MessageView.escape(obj.username)}</p></div>
        <div><p>${MessageView.escape(obj.text)}</p></div>
        <div><p>${MessageView.escape(obj.roomname)}</p></div>
    </div>`;
  },

  escape: function(string) {
    if (string === undefined || string === null) {
      return string;
    }
    var escapedString = '';
    for (var i = 0; i < string.length; i++) {
      var char;
      if(string[i] === '<') {
        char = '&lt;';
      } else if (string[i] === '>') {
        char = '&gt;';
      } else {
        char = string[i];
      }
      escapedString += char;
    }
    return escapedString;
  }



};