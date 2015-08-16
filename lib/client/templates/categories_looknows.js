Meteor.startup(function () {
  Template.categories_looknows.helpers({
    categories: function(){
      return Categories.find({}, {sort: {order: 1, name: 1}});
    },
    categoryLink: function(){
      return getCategoryUrl(this.slug);
    },
    title: function(){
      return Settings.get('TitleTagsWidget');
    }
  });
  Template.categories_looknows.events({
  'click .show-more': function (e, t) {
    e.preventDefault();
    $categories = t.$('#categories-menu');
    $categories.toggleClass('menu-open');
  }
  });
});

getCategoryUrl = function(slug){
  return Telescope.utils.getSiteUrl()+'category/'+slug;
};