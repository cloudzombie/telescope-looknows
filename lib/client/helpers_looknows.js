if (Meteor.isClient) {
  UI.registerHelper('ahAssetPath', function() {
    return ahAssetPath
  });
  UI.registerHelper('debug', function() {
    console.log(this);
  });

  UI.registerHelper("equals", function (a, b) {
    return (a == b);
  });

  UI.registerHelper('enumerate', function(arr) {
    return _.map(arr, function(val, i) {
      if (val != null) {
        val.index = i;
        return val;
      } else {
        return {index: i};
      }
    });
  });
}