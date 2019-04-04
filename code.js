$(document).on("mobileinit", function(){


	$(function(){

			$("body").bind("swiperight", function(e) {
            $.mobile.changePage( '#info', { transition: "slide" });
			});

	        $("body").bind("swipeleft", function(e) {
            $.mobile.changePage( '#dialog', { transition: "slide" });
			});

		

		});

});