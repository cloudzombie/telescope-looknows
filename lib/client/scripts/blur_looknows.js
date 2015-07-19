Template.post_content.rendered = function(){
    var postID = this.data._id;
    var $el = $('#'+postID+' .post-thumbnail-link img');    
    var img = $el.attr('src');
    var titleHeight = $('#'+postID+' .post-info').height();

    $('#'+postID+' .svg-blur').backgroundBlur({
     imageURL : img,
     blurAmount : 5,
     imageClass : 'bg-blur'
    });

    $('#'+postID+' .svg-blur').css('height', titleHeight+20);
    $('#'+postID+' .svg-bg-overlay').css('height', titleHeight+20);
    $('#'+postID+' .bg-blur').css('top', titleHeight-245+'px');
};
