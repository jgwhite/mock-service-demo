import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('setFooMessage', function(app, msg) {
  app.fooService.set('message', msg);
});
