			// Wysokość content

			function okno_size() {
				
				$("body").height($(window).height() - $("#navbar_custom").height() - $("#bottom_bar").height() - 45);

			}

			// Ukrywanie paneli - funkcja i zachowanie startowe pierwszego przycisku "Start"

			function ukryj_panele() {

				$(".content").addClass("ukryty");

			}

			// Efekt animowanego otwierania paneli content

			function show () {

				$(".left_content").stop(false, true);

				$(".right_content").stop(false, true);

				$(".left_content").show("fade", 500);

				$(".right_content").show("fade", 1000);

			}

			// Dostosowanie zawartości strony do rozmiaru okna po jej pierwszym otwarciu

			okno_size();

			// Reakcja strony na każdą zmianę rozmiaru okna

			$(window).resize(okno_size);

			// Przyciski w navbarze - podświetlenie i kursor

			$(".nav-link").hover(function() {

				$(this).addClass("podswietlony");

			}, function() {

				$(this).removeClass("podswietlony");

			});

			$(".start_content").removeClass("ukryty");

			// Przyciski navbara - aktywacja

			$(".nav-link").click(function() {

				// Zmiana koloru przycisków navbara

				$(".nav-link").removeClass("aktywny");

				$(this).toggleClass("aktywny");

				$(this).removeClass("podswietlony");

				// Otwarcie wybranego panelu

				var content_id = $(this).attr("id") + "_content";

				ukryj_panele();

				show();

				$("." + content_id).removeClass("ukryty");			

			});

			// Klik w spis treści

			$(".tech_button").click(function() {

				var button_id = "#" + $(this).attr("id") + "_navig";

				$('html, body').animate({

					scrollTop: $(button_id).offset().top - 100

				}, 1000);

			});

			// Ruch spisu treści

			(function($) {
    			var element = $('.follow-scroll'),
        			div_pozycja = element.offset().top;
      			  
			    $(window).on('scroll', function(event) {
			        var window_pozycja = $(window).scrollTop();

			        var window_size = $(window).height();
			        
			        var ryzyko = window_size - 603    

			        element.stop(false, false).animate({
			            top: window_pozycja < div_pozycja
			            	? 0
			            	: ryzyko < 50 
			            		?window_pozycja - div_pozycja - 115
			            		:window_pozycja - div_pozycja
			        }, 300)

			    });

			})(jQuery);