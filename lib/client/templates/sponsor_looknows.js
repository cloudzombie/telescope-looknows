
Template.sponsor_looknows.helpers({
    bannerCode: function(){
      return Settings.get('BannerCode');
    },
    title: function(){
      return Settings.get('TitleSponsorsWidget');
    }
});