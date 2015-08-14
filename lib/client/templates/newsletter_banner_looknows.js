Meteor.startup(function () {
  Template.newsletter_banner.helpers({
    userLog: function () {
      if(Meteor.user()){
      return true;
      }else{
      return false;
      }
    },
    showBanner: function () {
      // note: should not be reactive
      if(
            Settings.get('showBanner', false) === false
        ||  !Users.can.view(Meteor.user())
        ||  Router.current().location.get().path == '/'
        ||  (Meteor.user() && Meteor.user().getSetting('newsletter.showBanner', true) === false)
        ||  (Meteor.user() && Meteor.user().getSetting('newsletter.subscribeToNewsletter', false) === true)
      ){
        return false;
      }else{
        return true;
      }
    }
  });
 });