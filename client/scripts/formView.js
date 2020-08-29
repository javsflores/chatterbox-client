var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);

  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    // console.log('this is event:', event)
    event.preventDefault(); // ask what is happening

    var messageObj = {
      username: App.username,
      text: event.currentTarget['0'].value,
      roomname: 'FILL_ME_IN'
    };

    console.log(messageObj);
    Parse.create(messageObj);
    console.log(App.initialize);
    setTimeout(function() { location.reload(); }, 250);
    // location.reload can take an input?
    console.log('click');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};