var featuredPosts = function () {
    return Posts.find({sticky: true});
}

Meteor.startup(function () {
  Template.featured_posts_looknows.helpers({
    featured: function(){
      return featuredPosts()
    },
    hasFeatured: function(){
      return !!featuredPosts().count();
    },
    title: function(){
      return Settings.get('TitleTrandingWidget');
    }
  });
});