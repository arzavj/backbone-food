define(['backbone'], function(Backbone) {

	return Backbone.View.extend({

		el: 'body',

		initialize: function (options) {

			console.log("Initialized");
		},

		render: function () {

			var self = this;
			console.log(self.$el);
			self.$el.append("<p>Muahahaha</p>");
			return self;
		}
	});
});