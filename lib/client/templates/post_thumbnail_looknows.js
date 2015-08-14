Template.post_thumbnail.helpers({
  hasThumbnail: function () {
    if (this.thumbnailUrl||this.customThumbnailUrl) {
      return true;
    } else {
      return false;
    }
  },
  Thumbnail: function () {
    return !!this.thumbnailUrl? this.thumbnailUrl : this.customThumbnailUrl;
  }
});