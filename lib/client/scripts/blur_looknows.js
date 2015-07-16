Template.post_content.rendered = function(){
   var images = [];

    $('.post').each(function(i){
        var $el = $('.post:nth-child('+(i+1)+') .post-thumbnail-link');    
        var img = $el.find('img').attr('src');
        images.push(img);

        $el.load(function(e){
                e.preventDefault();
                $('.post:nth-child('+(i+1)+') .svg-blur').backgroundBlur(img);
        });

    $('.post:nth-child('+(i+1)+') .svg-blur').backgroundBlur({
     imageURL : images[i],
     blurAmount : 5,
     duration: 500, 
     imageClass : 'bg-blur'
    });

    $('.post:nth-child('+(i+1)+') .svg-blur').css('height', $('.post:nth-child('+(i+1)+') .post-info').height()+20);
    $('.post:nth-child('+(i+1)+') .svg-bg-overlay').css('height', $('.post:nth-child('+(i+1)+') .post-info').height()+20);
    $('.post:nth-child('+(i+1)+') .bg-blur').css('top', $('.post:nth-child('+(i+1)+') .post-info').height()-245+'px');
   });
};