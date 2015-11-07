Package.describe({
  name: "wpioneer:theme-looknows",
  summary: "Meteor: Looknows theme package",
  version: "0.1.6",
  git: "https://github.com/wpioneer/Looknows.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
      // core dependencies
      'telescope:core@0.20.5',
      'telescope:theme-base@0.20.5',
      'telescope:theme-hubble@0.20.5'
    ]);

  api.addFiles([
      'lib/looknows.js',
      'lib/modules_looknows.js',
      'lib/helpers_looknows.js',
      'lib/custom_fields_looknows.js'
  ], ['client', 'server']);

  api.addFiles([

      // add-ons
      'lib/client/main.html',

      // images

      // globals
      'lib/client/scss/global/_forms.scss',
      'lib/client/scss/global/_links.scss',
      'lib/client/scss/global/_forms.scss',
      'lib/client/scss/global/_markdown.scss',

      // modules
      'lib/client/scss/modules/_avatars.scss',
      'lib/client/scss/modules/_comments.scss',
      'lib/client/scss/modules/_layout.scss',
      'lib/client/scss/modules/_menu.scss',
      'lib/client/scss/modules/_nav.scss',
      'lib/client/scss/modules/_mobile_nav.scss',
      'lib/client/scss/modules/_posts.scss',
      'lib/client/scss/modules/_search.scss',
      'lib/client/scss/modules/_errors.scss',
      'lib/client/scss/modules/_newsletter.scss',
      'lib/client/scss/modules/_footer.scss',

      // partials
      'lib/client/scss/partials/_typography.scss',
      'lib/client/scss/partials/_grid.scss',
      'lib/client/scss/partials/_colors.scss',

      // screen
      'lib/client/scss/screen.scss',

      // overrides
      'lib/client/templates/layout_looknows.html',
      'lib/client/templates/post_admin_looknows.html',
      'lib/client/templates/post_content_looknows.html',
      'lib/client/templates/post_content_looknows.js',
      'lib/client/templates/post_info_looknows.html',
      'lib/client/templates/post_vote_looknows.html',
      'lib/client/templates/post_vote_looknows.js',
      'lib/client/templates/post_page_looknows.html',
      'lib/client/templates/nav_looknows.html',
      'lib/client/templates/posts_list_looknows.html',
      'lib/client/templates/posts_list_looknows.js',
      'lib/client/templates/search_looknows.html',
      'lib/client/templates/newsletter_banner_looknows.html',
      'lib/client/templates/newsletter_banner_looknows.js',
      'lib/client/templates/submit_button_looknows.html',
      'lib/client/templates/post_title_looknows.html',
      'lib/client/templates/post_thumbnail_looknows.html',
      'lib/client/templates/post_thumbnail_looknows.js',
      'lib/client/templates/post_body_looknows.html',
      'lib/client/templates/post_body_looknows.js',
      'lib/client/templates/post_comments_link_looknows.html',
      'lib/client/templates/post_item_looknows.html',
      'lib/client/templates/post_item_looknows.js',
      'lib/client/templates/message_item_looknows.html',
      'lib/client/templates/message_item_looknows.js',
      'lib/client/templates/single_day_nav_looknows.html',
      'lib/client/templates/loading_looknows.html',
      'lib/client/templates/post_share_looknows.html',
      'lib/client/templates/post_share_looknows.js',
      'lib/client/templates/sponsor_looknows.html',
      'lib/client/templates/sponsor_looknows.js',
      'lib/client/templates/featured_posts_looknows.html',
      'lib/client/templates/featured_posts_looknows.js',
      'lib/client/templates/featured_post_content_looknows.html',

      'lib/client/templates/categories_looknows.html',
      'lib/client/templates/categories_looknows.js',

      'lib/client/templates/social_box_looknows.html',
      'lib/client/templates/social_box_looknows.js',

      // fonts
      'lib/client/fonts/pt-sans.css',
      'lib/client/fonts/pt-sans/PTSansPro-Regular.eot',
      'lib/client/fonts/pt-sans/PTSansPro-Regular.woff',
      'lib/client/fonts/pt-sans/PTSansPro-Regular.ttf',
      'lib/client/fonts/pt-sans/PTSerifPro-Bold.eot',
      'lib/client/fonts/pt-sans/PTSerifPro-Bold.woff',
      'lib/client/fonts/pt-sans/PTSerifPro-Bold.ttf',
      'lib/client/fonts/pt-sans/PTSansPro-Demi.eot',
      'lib/client/fonts/pt-sans/PTSansPro-Demi.woff',
      'lib/client/fonts/pt-sans/PTSansPro-Demi.ttf',
      'lib/client/fonts/pt-sans/PTSerifPro-Demi.eot',
      'lib/client/fonts/pt-sans/PTSerifPro-Demi.woff',
      'lib/client/fonts/pt-sans/PTSerifPro-Demi.ttf',
      'lib/client/fonts/pt-sans/PTSansPro-Bold.eot',
      'lib/client/fonts/pt-sans/PTSansPro-Bold.woff',
      'lib/client/fonts/pt-sans/PTSansPro-Bold.ttf',
      'lib/client/fonts/pt-sans/PTSerifPro-Regular.eot',
      'lib/client/fonts/pt-sans/PTSerifPro-Regular.woff',
      'lib/client/fonts/pt-sans/PTSerifPro-Regular.ttf',

      // customizations
      'lib/client/scripts/icons_looknows.js',
      'lib/client/scripts/templates_looknows.js',

      // assets
      'lib/client/assets/social.css',
      'lib/client/assets/fonts/social/social.eot',
      'lib/client/assets/fonts/social/social.svg',
      'lib/client/assets/fonts/social/social.ttf',
      'lib/client/assets/fonts/social/social.woff',

      'lib/client/assets/looknows.css',
      'lib/client/assets/fonts/looknows/looknows.eot',
      'lib/client/assets/fonts/looknows/looknows.svg',
      'lib/client/assets/fonts/looknows/looknows.ttf',
      'lib/client/assets/fonts/looknows/looknows.woff',

      //plugins
      'lib/client/scripts/fixedblock.js',
      'lib/client/scripts/sdk.js'


    ], ['client']);

});
