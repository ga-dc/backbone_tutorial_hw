var Grumble = Backbone.Model.extend({
  defaults:{
    completed: false
  },
  initialize: function(){
    console.log("new grumble!");
  }
});
