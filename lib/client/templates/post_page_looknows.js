Template.post_page.helpers({
  isPending: function () {
    return this.status === Posts.config.STATUS_PENDING;
  }
  upvoted: function(){
    var user = Meteor.user();
    if(!user) return false;
    return _.include(this.upvoters, user._id);
  }
});

Template.post_page.rendered = function(){
  $('body').scrollTop(0);
};
