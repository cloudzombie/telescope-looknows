Template.post_content.rendered = function(){
    var postID = this.data._id;
    var $el = $('#'+postID+' .post-thumbnail-link');    
    var img = $el.find('img').attr('src');

    $('#'+postID+' .svg-blur').backgroundBlur({
     imageURL : img,
     blurAmount : 5,
     imageClass : 'bg-blur'
    });

    $('#'+postID+' .svg-blur').css('height', $('#'+postID+' .post-info').height()+20);
    $('#'+postID+' .svg-bg-overlay').css('height', $('#'+postID+' .post-info').height()+20);
    $('#'+postID+' .bg-blur').css('top', $('#'+postID+' .post-info').height()-245+'px');

};
