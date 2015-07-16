Template.post_content.helpers({
  upvoted: function(){
    var user = Meteor.user();
    if(!user) return false;
    return _.include(this.upvoters, user._id);
  }
});

Template.post_title.onRendered(function() {
    $('.post-text').succinct({
           size: 320
       });
});
