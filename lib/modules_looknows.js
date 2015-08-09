Telescope.modules.removeAll("postComponents");
Telescope.modules.add("postComponents", [
  {
    template: 'post_content',
    order: 20
  }
]);

Telescope.modules.removeAll("primaryNav");
Telescope.modules.add("primaryNav", {
  template: 'search',
  order: 100
});


Telescope.modules.removeAll("postHeading");
Telescope.modules.add("postHeading", [
  {
    template: 'post_domain',
    order: 10
  },  
  {
    template: 'post_title',
    order: 30
  }
]);

Telescope.modules.removeAll("postMeta");
Telescope.modules.add("postMeta", [
  {
    template: 'post_info',
    order: 10
  },
  {
    template: 'post_comments_link',
    order: 30
  }
]);

Telescope.modules.add("looknowsSidebar", [
  {
    template: 'featured_posts_looknows',
    order: 30
  },
  {
    template: 'sponsor_looknows',
    order: 40
  }
]);

Telescope.modules.add("featuredComponents", [
  {
    template: 'featured_post_content_looknows',
    order: 10
  }
]);
