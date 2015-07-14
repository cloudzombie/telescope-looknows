Template.post_title.onRendered(function() {
   var images = [];

    $('.posts .post').each(function(i){
        var $el = $('.posts .post:nth-child('+(i+1)+') .post-thumbnail-link');    
        var img = $el.find('img').attr('src');
        $('.posts .post:nth-child('+(i+1)+') .svg-blur').css('height', $('.posts .post:nth-child('+(i+1)+') .post-info').height()+15);
        $('.posts .post:nth-child('+(i+1)+') .svg-bg-overlay').css('height', $('.posts .post:nth-child('+(i+1)+') .post-info').height()+15);
        $('.posts .post:nth-child('+(i+1)+') .bg-blur').css('top', $('.posts .post:nth-child('+(i+1)+') .post-info').height()-250+'px');
        images.push(img);



        $el.load(function(e){
                e.preventDefault();
                $('#post-thumbnail-link').backgroundBlur(img);
        });

    $('.posts .post:nth-child('+(i+1)+') .svg-blur').backgroundBlur({
     imageURL : images[i],
     blurAmount : 1,
     duration: 1000, 
     imageClass : 'bg-blur'
    });

   });

});
