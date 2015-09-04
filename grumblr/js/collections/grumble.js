var Grumbles = Backbone.Collection.extend({
  initialize:function(){
    console.log("created a new grumbles collection");
  },
  model: Grumble
});
