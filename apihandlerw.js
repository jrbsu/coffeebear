jQuery(document).ready(function() {
	var apiurl = "http://content.guardianapis.com/media?show-fields=headline%2Cbody&show-elements=image&show-editors-picks=true&page-size=5&date-id=date%2Flast7days&hide-recent-content=true&api-key=mediahackdays2014";
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
			});
		}
	});
var swipeNavigation = function (initialPage, navOrder) {
    "use strict";
    var currentIndex;
    currentIndex = navOrder.indexOf(initialPage);
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
    		currentIndex = 4;
    		$.mobile.changePage("#page4", {transition: 'slide', reverse: 'true'});
        };
    });
};

initialPage = '#page0';
navOrder = [initialPage, '#page1', '#page2', '#page3', '#page4'];
swipeNavigation(initialPage, navOrder);

$('.category').click(
    function(e){
    	var category = $('this.category').attr('id')
        apiurl = "http://content.guardianapis.com/" + category + "?show-fields=headline%2Cbody&show-elements=image&show-editors-picks=true&page-size=5&date-id=date%2Flast7days&hide-recent-content=true&api-key=mediahackdays2014";
    });
});