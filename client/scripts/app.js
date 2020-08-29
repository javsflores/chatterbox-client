var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },
  // App.fetch(() => { Window.Messages = this.data; console.log('Messages: ', Window.Messages); });
  // console.log(Window.Messages);
  // //i think the issue is that this happens BEFORE the fetch function is defined. need to

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:

      //console.log(data);
      Messages = data.results;
      console.log('messages start');
      console.log(Messages);
      console.log('messages end');
      MessagesView.render();
      callback();
    });
  },

  //
  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
