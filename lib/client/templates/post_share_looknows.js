Meteor.startup(function () {
  Template.post_share.helpers({
    sourceLink: function(){
      return !!this.url ? this.url : Posts.getPageUrl(this);
    },
    viaTwitter: function () {
      return !!Settings.get('twitterAccount') ? 'via='+Settings.get('twitterAccount') : '';
    },
    hasThumbnail: function () {
    if (this.thumbnailUrl||this.customThumbnailUrl) {
      return true;
    } else {
      return false;
    }
    },
    Thumbnail: function () {
      return !!this.thumbnailUrl? encodeURIComponent(this.thumbnailUrl) : encodeURIComponent(this.customThumbnailUrl);
    }
  });

  Template.post_share.events({
    'click .share-link': function(e){
      var $this = $(e.target).parents('.post-share').find('.share-link');
      var $share = $this.parents('.post-share').find('.share-options');
      e.preventDefault();
      $('.share-link').not($this).removeClass("active");
      $(".share-options").not($share).addClass("hidden");
      $this.toggleClass("active");
      $share.toggleClass("hidden");
    }
  });
});
