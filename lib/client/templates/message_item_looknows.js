Template.message_item.onCreated(function(){
	var messageId=this.data._id;

	Meteor.setTimeout(function(){
		Messages.collection.update(messageId, {$set: {seen:true}});
	}, 100);
});
Template.message_item.events({
  'click .error .close': function(e) {
    $(e.currentTarget).closest(".error").remove();
  }
});