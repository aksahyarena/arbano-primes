$(document).ready(function () {
	var d = new Date();
	$('.copyrightYear').html(d.getFullYear());

	var winHT = $(window).height();
	var winWD = $(window).width();
	var navHt = $("header").outerHeight();
	var bannerHt = winHT - navHt;
	isFloorplan = 0;
	isBrochure = 0;

	$(".nav-links").css("top",navHt-3)
	var get_custom_margin = winWD - $(".container").width();
		// alert(get_custom_margin/2)
		$(".about .content-area").css("margin-left", get_custom_margin / 2)
		$(".home-banner .enquire-btn").css("left", get_custom_margin / 2)
		// $(".right-area.set-margin").css("margin-right", get_custom_margin / 2)


	$('.banner_ht').css('height', bannerHt);
	$('.section-first').css('margin-top', navHt)

	$(".goto-home").on("click", function () {
		$("html,body").animate({
			scrollTop: 0
		}, 1000);
	});

	$(".scroll-next").click(function () {
		var cls = $(this).closest("section").next().offset().top - 50;
		$("html, body").animate({ scrollTop: cls }, 1000);
	});



	$(".enq_click").click(function () {
		if ($(".form-container").is(':visible')) {
			$(".form-container").slideUp();
		}
		else {
			$(".form-container").slideToggle();
		}
	});

	$(".menu-icon-mobile").on("click", function () {
		$(this).toggleClass("rotate-hamburger");
		$(".nav-links").slideToggle();
	});

	if (winWD <= 768) {
		$(".nav-links a").on("click", function () {
			$(".menu-icon-mobile").trigger("click");
		})

		$(".mob_enq_click, .frmclose").on("click", function () {
			isBrochure = 0;
			isFloorplan = 0;
			$(".form-container").toggleClass("show");
		});
	}

	$(".open-block-popup").click(function () {
		/* fade the background container */
		$(".fade-on-popup-open").css({ "opacity": "0.2", "transition": "0.7" })

		/* get the block */
		var getDataBlockNumber = $(this).attr("data-block-number")

		/* show the popup */
		$(".block-overlay").fadeToggle()
		$('.for-all-popup-content').removeClass("active")
		$(`.for-all-popup-content.${getDataBlockNumber}-popup-bg-content`).addClass("active")
	})
	$(".block-close").click(function () {
		$(".fade-on-popup-open").css({ "opacity": "1", "transition": "1s", "transition-delay": "0.5" })
		$(".block-overlay").fadeOut("slow")
	})
	// $(".menu-icon-mobile").on("click", function () {
	// 	$(this).toggleClass("rotate-hamburger");
	// 	$(".nav-links").slideToggle();
	// });
	$(".overview-slider").slick({
		dots: false,
		infinite: true,
		speed: 1000,
		arrows: true,
		slidesToShow: 4,
		autoplay: false,
		centerMode: false,
		responsive: [
			{
				breakpoint: 2200,
				settings: {
				  slidesToShow: 5,
				  slidesToScroll:1,
				}
			  },
			  {
				breakpoint: 1500,
				settings: {
					slidesToShow: 4,
				  slidesToScroll:1,
				}
			  },
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 1,
				slidesToScroll:1,
			  }
			},
			
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
	})
	$(".open-form,.close,.mob-enq-btn").click(function(){
		$(".overlay").slideToggle()
	})
	$(".service-slider").slick({
		dots: true,
		infinite: true,
		speed: 1000,
		arrows: true,
		slidesToShow: 3,
		autoplay: false,
		centerMode: false,
		variableWidth:true,
		prevArrow:"#ser-prev",
		nextArrow:"#ser-next"
	})
	if(winWD<992){
		var $removedDiv = $('.service-addons-block').detach();

	// Append the removed div to the new div
	$removedDiv.appendTo('.service-addons-slider');
	}
$(".block-slider").slick({
		
		infinite: true,
		speed: 1000,
		arrows: true,
		slidesToShow: 1,
		autoplay: false,
		centerMode: false,
		variableWidth:false,
		prevArrow:"#block-slider-prev",
		nextArrow:"#block-slider-next"
	})

	$(".service-addons-slider").slick({
		dots:true,
		infinite: true,
		speed: 1000,
		arrows: true,
		slidesToShow: 1,
		autoplay: false,
		centerMode: false,
		variableWidth:false,
		prevArrow:"#addons-slider-prev",
		nextArrow:"#addons-slider-next"
	})


	$('.location-content-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.location-icon-slider',
		prevArrow:"#loc-prev",
		nextArrow:"#loc-next",

	  });
	  $('.location-icon-slider').slick({
		slidesToShow: 5,
		asNavFor: '.location-content-slider',
		vertical: true,
		focusOnSelect: true,
		autoplay: false,
		centerMode: true
	  });
	
if(winWD<992){
	$(".semi-curve").slick({
		dots: false,
		infinite: true,
		speed: 1000,
		arrows: true,
		slidesToShow: 1,
		autoplay: false,
		centerMode: false,
		variableWidth:false,
		prevArrow:"#semi-curve-prev",
		nextArrow:"#semi-curve-next"
	})
}
	  

// $(".plus-icon").click(function(){
// 	$(".addons-bottom-gradient").css({"height":"160px","background":"transparent linear-gradient(180deg, #29292700 0%, #292927 100%) 0% 0% no-repeat padding-box"})
// 	$(".time-activity").css("opacity","1")
// 	$(".plus-icon").show()
// 	$(this).hide();
	
// 	// $(".time-activity").css("opacity","0")
// 	$(this).closest(".service-addons-block").find(".time-activity").css("opacity","0")
// 	$(this).closest(".service-addons-block").find(".addons-bottom-gradient").css({"height":"100%","background":"#000000c7"})
// })
	

	var childrenSelector = $(".nav-links a");
	var aChildren = $(".nav-links a"); // find the a children of the list items
	if (winWD <= 700)
		var gap = 55;// $(".header-wrapper").outerHeight(); //Navigation height
	else
		var gap = 100;
	var aArray = []; // create the empty aArray
	for (var i = 0; i < childrenSelector.length; i++) {
		var aChild = aChildren[i];
		if (!$(aChild).hasClass('extLink')) {
			if ($(aChild).attr('rel')) {
				var ahref = $(aChild).attr('rel');
				aArray.push(ahref);
			}
		}
	}

	//On Scroll - Add class active to active tab
	$(window).scroll(function () {
		
		

		var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
		var windowHeight = $(window).height(); // get the height of the window
		var docHeight = $(document).height();
		for (i = 0; i < aArray.length; i++) {
			var theID = aArray[i];
			var divPos = $("#" + theID).offset().top; // get the offset of the div from the top of page
			var divHeight = $("#" + theID).outerHeight(); // get the height of the div in question
			if (windowPos >= (divPos - gap) && windowPos < ((divPos - gap) + divHeight)) {
				if (!$("a[rel='" + theID + "']").hasClass("active")) {
					// ga('set', 'page', '/'+theID);
					// ga('send', 'pageview');
					$("a[rel='" + theID + "']").addClass("active");
				}
			}
			else {
				$("a[rel='" + theID + "']").removeClass("active");
			}
			if(theID=="")
			if($(window).scrollTop() >= $('.set-service-block-right').offset().top + $('.set-service-block-right').outerHeight() - window.innerHeight) {
				// alert('Bottom');
			  }
		}

		//If document has scrolled to the end. Add active class to the last navigation menu
		if (windowPos + windowHeight == docHeight) {
			if (!$(".nav-links a:not(.extLink):last-child").hasClass("active")) {
				var navActiveCurrent = $(".active").attr("rel");
				$("a[rel='" + navActiveCurrent + "']").removeClass("active");
				$(".nav-links a:not(.extLink):last-child").addClass("active");
			}
		}
	});

	//On Click
	$('.nav-links a,.set-block a').on("click", function () {
		if (!$(this).hasClass('extLink')) {
			var href = $(this).attr("rel");
			if (winWD <= 700)
				var gap = 45; // $(".header-wrapper").outerHeight(); //Navigation height
			else
				var gap = 96;

			$('html,body').animate({
				scrollTop: $("#" + href).offset().top - gap
			}, 1000);
		}
	});


});

$(window).scroll(function () {
	$(".lazy").each(function () {
		if ($(this).attr("data-src")) {
			(this.tagName == "IMG" || this.tagName == "IFRAME") ? $(this).attr("src", $(this).data("src")) : $(this).css("background-image", "url(" + $(this).data("src") + ")");
			$(this).removeAttr("data-src");
		}
	});
	var windscroll = $(window).scrollTop();
	if (windscroll >= 50) {
		$("header").addClass("active");
	}
	else {
		$("header").removeClass("active");
	}
});