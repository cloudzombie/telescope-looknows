Meteor.startup(function () {
  Template.featured_posts_looknows.helpers({
    featured: function(){
      return Posts.find({sticky: true});
    }
  });
});