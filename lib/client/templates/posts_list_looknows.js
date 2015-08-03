Meteor.startup(function () {
  Template.posts_list.helpers({
    PostsList: function(){
      return Posts.find({sticky: false});
    }
  });
});