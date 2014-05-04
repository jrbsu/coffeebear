jQuery(document).ready(function() {
	var apiurl = "http://content.guardianapis.com/media?show-fields=headline%2Cbody&show-elements=image&show-editors-picks=true&page-size=5&date-id=date%2Flast7days&hide-recent-content=true&api-key=mediahackdays2014";
	$.ajax({
		dataType: "jsonp",
		url: apiurl,
		success: function (data) {
			var heads = [];
			var article = data["response"]["editorsPicks"];
				console.log(article);
			$.each(article, function(index) {
//				bodies.push(article["fields"]["body"]);
//				heads.push(article["fields"]["headline"]); // Add both to arrays
				$("h2:nth-child("+index+")").replaceWith("<h2>" + article[index].fields.headline + "</h2>")
			});
		}
	});
	
    var vidid;
	$('.nextvideo').click(function() {
		$('.nextvideo').css("background-color", "#000");
		$(this).css("background-color", "#c00");
		vidid = $(this).attr('id');
		newcaption = $(this).text();
		console.log(vidid + "," + newcaption);
		$('iframe').replaceWith("<iframe width='100%' height='500' src='http://www.youtube.com/embed/"+vidid+"' frameborder='0' allowfullscreen></iframe>");
		$(".caption").html('<p>'+newcaption+'</p>');	
	});
	$('button#upload').click(function() {
		$('button#upload').replaceWith("<button type='submit' data-theme='a' class='ui-btn-hidden' aria-disabled='false' id='upload'>This doesn't quite work yet ;-\)</button>")
	});
});