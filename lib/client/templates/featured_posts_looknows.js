var featuredPosts = function () {
    return Posts.find({sticky: true});
}

Template.featured_posts_looknows.created = function() {
  Session.set('listPopulatedAt', new Date());
};

Template.featured_posts_looknows.helpers({
  featured: function(){
    return featuredPosts();
 },
  hasFeatured: function(){
    return !!featuredPosts().count();
  },
  title: function(){
    return Settings.get('TitleTrandingWidget');
  }
});
