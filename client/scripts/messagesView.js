var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function() {
    var html = '';
    for (var i = 0; i < Messages.length; i++) {
      console.log(Messages[i]);
      html += MessageView.render(Messages[i]);
    }
    $('#chats').append(html);
  }
};


