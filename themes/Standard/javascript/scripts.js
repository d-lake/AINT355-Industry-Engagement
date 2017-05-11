$(function() {
	$("#Champions .grid-item a").click(function () {
     	var championID = $(this).data('champion-id');
     	var championName = $(this).data('champion-name');
     	$(".modal-title").text(championName);
     	var url = "https://na.api.pvp.net/api/lol/static-data/euw/v1.2/champion/"+championID+"?champData=all&api_key=RGAPI-2bfd21e5-c70f-4062-95e5-e0217513e966"
     	$.getJSON(url, function(data) {
     		var OverviewHTML = getOverviewData(data["allytips"], data["enemyTips"], data["info"], data["lore"], data["stats"], data["tags"], data["title"]),
     			AbilitiesHTML = getAbilitiesData(data["passive"], data["spells"]),
     			SkinsHTML = getSkinsData(data["key"], data["skins"]);

     		console.log(data);
        });
 	});

 	$('#Champion_Modal').on('hidden.bs.modal', function () {
    	$(".modal-body #skins").html("");
	});

	var homeGrid = $('#Champions .grid').masonry({
      	itemSelector: '.grid-item',
      	columnWidth: '.grid-sizer',
      	gutter: 0,
      	percentPosition: true
	});

	

	$('#Home .main-nav').on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
	    homeGrid.imagesLoaded().progress( function() {
	    homeGrid.masonry('layout');
	}).css("display", "inherit");
	});

	$('#Champions').on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
	    if ($(".modal-content").height() > $(window).height()) {
        	$('.modal').css('left', '10px');
    	} else {
        	$('.modal').css('left', '0px');
    	}
	});


	$('#Champions').on('hidden.bs.modal', '#Champion_Modal', function (e) {
	    $('.modal-body .nav-tabs li').removeClass('active');
	    $('.modal-body .nav-tabs li').first().addClass('active');
	    $('.modal-body .tab-content	.tab-pane').removeClass('active');
	    $('.modal-body .tab-content .tab-pane').first().addClass('active');
        $('.modal').css('left', '0px');
	});
});

function getOverviewData(allytips, enemyTips, info, lore, stats, tags, title ) {

	// $(".modal-body #overview").html(combinedHTML);
}

function getAbilitiesData(passive, spells) {
	
	// $(".modal-body #abilities").html(combinedHTML);
}

function getSkinsData(key, skins) {
	var carouselHTMLBeginCarousel  = '<div id="skinCarousel" class="carousel slide" data-interval="false">',
		carouselHTMLBeforeImages   = '<div class="carousel-inner" role="listbox">',
		carouselHTMLImages         = "",
		carouselHTMLAfterImages    = '</div>' +
									 '<a class="left carousel-control" href="#skinCarousel" role="button" data-slide="prev">' +
									 '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>' +
									 '<span class="sr-only">Previous</span>' +
									 '</a>' +
									 '<a class="right carousel-control" href="#skinCarousel" role="button" data-slide="next">' +
									 '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>' +
									 '<span class="sr-only">Next</span>' +
									 '</a>' +
									 '<ol class="carousel-indicators">',
		carouselHTMLIndicators 	   = "",
		carouselHTMLEndCarousel	   = '</ol>' +
									 '</div>';


	for (i = 0; i < skins.length; i++) { 
		var IndicatorActive = "";
		var ImageActive = "";
		if(i == 0) {
			IndicatorActive = ' class="active"';
			ImageActive = "active";
		}

		carouselHTMLIndicators += '<li data-target="#skinCarousel" data-slide-to="'+i+'"'+IndicatorActive+'><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+key+'_'+skins[i]["num"]+'.jpg"></li>';
		carouselHTMLImages 	   += '<div class="item '+ImageActive+'">' +
							      '<img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+key+'_'+skins[i]["num"]+'.jpg">' +
							      '<div class="carousel-caption">' +
								  '<h3>'+skins[i]["name"]+'</h3>' +
								  '</div>' +
							      '</div>';
	}

	var combinedHTML = carouselHTMLBeginCarousel+carouselHTMLBeforeImages+carouselHTMLImages+carouselHTMLAfterImages+carouselHTMLIndicators+carouselHTMLEndCarousel;

	$(".modal-body #skins").html(combinedHTML);
}
