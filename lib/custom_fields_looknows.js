var TitleBannerWidget = {
  fieldName: "TitleBannerWidget",
  propertyGroup: "sidebar",
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
      group: "sidebar",
    }
  }
};
Settings.addField(TitleBannerWidget);

var TitleTrendingWidget = {
  fieldName: "TitleTrandingWidget",
  propertyGroup: "sidebar",
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
      group: "sidebar",
    }
  }
};
Settings.addField(TitleTrendingWidget);

var TitleTagsWidget = {
  fieldName: "TitleTagsWidget",
  propertyGroup: "sidebar",
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
      group: "sidebar",
    }
  }
};
Settings.addField(TitleTagsWidget);

var BannerCode = {
  fieldName: "BannerCode",
  propertyGroup: "extras",
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
      group: "extras",
      rows: 5
    }
  }
};
Settings.addField(BannerCode);