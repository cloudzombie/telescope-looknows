if (Meteor.isClient) {
  UI.registerHelper("equals", function (a, b) {
    return (a == b);
  });
}