define(['text!templates/index.html'], function(indexTemplate) 
{
var indexView = Backbone.View.extend({
el: $('#content'),
render: function() {
this.$el.html(indexTemplate);
}
});
return new indexView;
});


define(['text!templates/register.html'],function(registerTemplate){

	var registerView=Backbone.View.extend({
		
		el : $('#content'),

		events : {

			"submit form" : "register"

		},

		register : function(){

			$.post('/register',{

				firstName : $('input[name=firstName]').val(),
				lastName  : $('input[name=lastName]').val(),
				email     : $('input[name=email]').val(),
				password  : $('input[name=password]').val(),

			},function(data){
				console.log(data);
			});

			return false;
		},

		render : function(){
			this.$el.html(registerTemplate);
		}
	});

	return registerView;

});

define(['text!templates/login.html'],function(loginTemplate){

  var loginView=Backbone.View.extend({

  	el :  $('#content'),

  	events : {

  		"submit form" : "login"

  	},

    login: function() {
          $.post('/login', {
           email: $('input[name=email]').val(),
           password: $('input[name=password]').val()
           }, function(data) { 
              console.log(data);
            }).error(function(){
            $("#error").text('Unable to login.');
            $("#error").slideDown();
            });
           return false;
},


render: function() {
this.$el.html(loginTemplate);
$("#error").hide();
}
});
return loginView;

});

