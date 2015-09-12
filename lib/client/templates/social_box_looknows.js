var dismissBox = function () {
  $('#social-box').fadeOut('fast', function () {
    if(Meteor.user()){
      Users.setSetting(Meteor.user(), 'showSocialBox', false);
    }else{
      Cookie.set('showSocialBox', "no");
    }
  });
}

Meteor.startup(function () {

Template.categories_looknows.rendered = function() {
  setTimeout(function() {
    if (typeof twttr!=="undefined") {
    try {
      FB.XFBML.parse();
    }catch(e) {}
    twttr.widgets.load(this.firstNode);
    }
  }, 0);
};

  Template.social_box_looknows.helpers({
    showSocialBox: function () {
      if(
            !Users.can.view(Meteor.user())
        ||  Router.current().location.get().path !== '/'
        ||  (Meteor.user() && Meteor.user().getSetting('showSocialBox', true) === false)
      ){
        return false;
      }else{
        return true;
      }
    }
  });

  Template.social_box_looknows.events({
    'click .social-box-dismiss': function (e) {
      $('#social-box').fadeOut('fast');
      dismissBox();
      e.preventDefault();
    }
  });
});
