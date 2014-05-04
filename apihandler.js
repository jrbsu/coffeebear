jQuery(document).ready(function() {
	var apiurl = "http://content.guardianapis.com/culture?show-fields=headline%2Cbody&show-elements=image&show-editors-picks=true&page-size=5&date-id=date%2Flast7days&hide-recent-content=true&api-key=mediahackdays2014";
	var navOrder;
	$.ajax({
		dataType: "jsonp",
		url: apiurl,
		success: function (data) {
			var bodies = [];
			var heads = [];
			var article = data["response"]["editorsPicks"];
				console.log(article);
			$.each(article, function(index) {
//				bodies.push(article["fields"]["body"]);
//				heads.push(article["fields"]["headline"]); // Add both to arrays
				$("#page"+index+" h2").replaceWith("<h2>" + article[index].fields.headline + "</h2>")
				$("#page"+index+" p").replaceWith("<p>" + article[index].fields.body + "</p>")
				$(navOrder).push("#page"+index);
			});
		}
	});
	
	var swipeNavigation = function (initialPage, navOrder) {
	    "use strict";
    	var currentIndex;
    	currentIndex = 0;
    	$(document).on("swipeleft", function() {
    	    var nextIndex = currentIndex + 1;
    	    if (nextIndex < navOrder.length) {
	            $.mobile.changePage($(navOrder[nextIndex]), {transition: 'slide'});
	            currentIndex = nextIndex;
			} else {
				$.mobile.changePage("#page0", {transition: 'slide'});
			}
		});
		$(document).on("swiperight", function() {
			if (currentIndex >= 0) {
        	    $.mobile.changePage($(navOrder[currentIndex]), {transition: 'slide', reverse: 'true'});
        	    currentIndex --;
        	} else {
    			currentIndex = navOrder.length-1;
    			$.mobile.changePage("#page4", {transition: 'slide', reverse: 'true'});
        	};
    	});
	};
	
	initialPage = '#page0';
	console.log(navOrder);
	swipeNavigation(initialPage, navOrder);
});