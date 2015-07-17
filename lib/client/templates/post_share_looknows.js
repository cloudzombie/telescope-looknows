Template.post_share.events({
  'click .upvote-link': function(e){
      post_share.update(this._id, {
        $set: {HiddenShare: ! this.HiddenShare}
      });
  }
});