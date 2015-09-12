Template.post_body.helpers({
  postLink: function(){
    return Posts.getLink(this);
  },
  postTarget: function() {
    return !!this.url ? '_blank' : '';
  },
  categoriesArray: function(){
    return _.map(this.categories, function (categoryId) { // note: this.categories maybe be undefined
      return Categories.findOne(categoryId);
    });
  },
  categoryLink: function(){
    return Categories.getUrl(this.slug);
  }
});
