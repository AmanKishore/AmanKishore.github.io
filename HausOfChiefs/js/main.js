
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     
     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
     
    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    $('.active-project-carousel').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin: 100,
        nav: true,
        navText: ['<i class="fa fa-caret-left""></i>', '<i class="fa fa-caret-right""></i>']
    });
    // $('.active-banner-slider').owlCarousel({
    //     items:1,
    //     loop:true,
    //     margin: 100,
    //     dots: true
    // });
    // Add smooth scrolling to Menu links

    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });      
    // -------   Mail Send ajax

     $(document).ready(function() {


       // Video lightbox

        $('.play-btn').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });


      //  testimonail carusel

        $('.active-bottle-carousel').owlCarousel({
            items:1,
            loop:true,
            nav: false,
            autoplay: true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });

        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message

        // Vertical Timeline - by CodyHouse.co
        function VerticalTimeline( element ) {
            this.element = element;
            this.blocks = this.element.getElementsByClassName("js-cd-block");
            this.images = this.element.getElementsByClassName("js-cd-img");
            this.contents = this.element.getElementsByClassName("js-cd-content");
            this.offset = 0.8;
            this.hideBlocks();
        };

        VerticalTimeline.prototype.hideBlocks = function() {
            //hide timeline blocks which are outside the viewport
            if ( !"classList" in document.documentElement ) {
                return;
            }
            var self = this;
            for( var i = 0; i < this.blocks.length; i++) {
                (function(i){
                    if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
                        self.images[i].classList.add("cd-is-hidden"); 
                        self.contents[i].classList.add("cd-is-hidden"); 
                    }
                })(i);
            }
        };

        VerticalTimeline.prototype.showBlocks = function() {
            if ( ! "classList" in document.documentElement ) {
                return;
            }
            var self = this;
            for( var i = 0; i < this.blocks.length; i++) {
                (function(i){
                    if( self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
                        // add bounce-in animation
                        self.images[i].classList.add("cd-timeline__img--bounce-in");
                        self.contents[i].classList.add("cd-timeline__content--bounce-in");
                        self.images[i].classList.remove("cd-is-hidden");
                        self.contents[i].classList.remove("cd-is-hidden");
                    }
                })(i);
            }
        };

        var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
            verticalTimelinesArray = [],
            scrolling = false;
        if( verticalTimelines.length > 0 ) {
            for( var i = 0; i < verticalTimelines.length; i++) {
                (function(i){
                    verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
                })(i);
            }

            //show timeline blocks on scrolling
            window.addEventListener("scroll", function(event) {
                if( !scrolling ) {
                    scrolling = true;
                    (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
                }
            });
        }

        function checkTimelineScroll() {
            verticalTimelinesArray.forEach(function(timeline){
                timeline.showBlocks();
            });
            scrolling = false;
        };

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'mail.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.attr("style", "display: none !important");; // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });
 });
