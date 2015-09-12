if (Meteor.isClient) {
  UI.registerHelper("equals", function (a, b) {
    return (a == b);
  });
  UI.registerHelper("userLog", function () {
     if (Meteor.user()) {
     return true;
     } else {
     return false;
     }
  });
}