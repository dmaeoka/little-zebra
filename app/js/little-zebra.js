	 /* =================================
	 	 LOADER										 
	 =================================== */
	 // makes sure the whole site is loaded
	 jQuery(window).load(function() {
	     // will first fade out the loading animation
	     jQuery(".status").fadeOut();
	     // will fade out the whole DIV that covers the website.
	     jQuery(".preloader").delay(1000).fadeOut("slow");
	 })


	 /* =================================
	 ===	Bootstrap Fix ====
	 =================================== */
	 if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	     var msViewportStyle = document.createElement('style')
	     msViewportStyle.appendChild(
	         document.createTextNode(
	             '@-ms-viewport{width:auto!important}'
	         )
	     )
	     document.querySelector('head').appendChild(msViewportStyle)
	 }

	 /* =================================
	 ===	STICKY NAV ====
	 =================================== */

	 $(document).ready(function() {
	     $('.main-nav-list').onePageNav({
	         changeHash: false,
	         scrollSpeed: 750,
		     offsetTop: 120,
	         scrollThreshold: 0.5,
	         filter: ':not(.external)'
	     });

	     // Sticky Header - http://jqueryfordesigners.com/fixed-floating-elements/				 
	     var top = $('#main-nav').offset().top - parseFloat($('#main-nav').css('margin-top').replace(/auto/, 0));

	     $(window).scroll(function(event) {
	         // what the y position of the scroll is
	         var y = $(this).scrollTop();

	         // whether that's below the form
	         if (y >= top) {
	             // if so, ad the fixed class
	             $('#main-nav').addClass('fixed');
	         } else {
	             // otherwise remove it
	             $('#main-nav').removeClass('fixed');
	         }
	     });

	     $(window).resize(function(){
	     	var w = $(window).width();
	     	var h = $('#main-nav').height();
	     	$('#donation').css('padding-top',h);
	     });

	     $(window).resize();

	     var val_animal = $('#animal').val();
	     $('#animal-holder').removeClass().addClass(val_animal);
	     $(document).on('change','#animal',function(){
	     	$this = $(this);
	     	$('#animal-holder').removeClass().addClass($this.val());
	     });

	     $(document).on('submit','#form-donation',function(){
	     	var value_1 = $('input[name=value_1]:checked').val();
	     	var value_2 = $('#value_2').val();
	     	if (value_1 || value_2) {
	     		return true;
	     	} else {
	     		alert('Want to help us?? Please, select a value to donate!');
	     	}
	     	return false;
	     });
	     $(document).on('click','.donation-value .btn-group .btn',function(){
	     	$('#value_2').val("");
	     });
	     $(document).on('keypress','#value_2',function(){
	     	var $val = $(this).val();
	     	if (parseInt($val)>=11) {
	     		console.log('teste');
	     		$('.donation-value .btn-group .btn').each(function(){
					$(this).button('reset').removeClass('active');
				});
	     	}
	     });
	 });
	 
	 /*=================================
	 ===	SMOOTH SCROLL ====
	 =================================== */
	 var scrollAnimationTime = 1200,
	     scrollAnimation = 'easeInOutExpo';
	 $('a.scrollto').bind('click.smoothscroll', function(event) {
	     event.preventDefault();
	     var target = this.hash;
	     $('html, body').stop().animate({
	         'scrollTop': $(target).offset().top
	     }, scrollAnimationTime, scrollAnimation, function() {
	         window.location.hash = target;
	     });
	 });

	 /* ================================
	 ===	PARALLAX ====
	 ================================= */
	 $(document).ready(function() {
	     var $window = $(window);
	     $('div[data-type="background"], header[data-type="background"], section[data-type="background"]').each(function() {
	         var $bgobj = $(this);
	         $(window).scroll(function() {
	             var yPos = -($window.scrollTop() / $bgobj.data('speed'));
	             var coords = '50% ' + yPos + 'px';
	             $bgobj.css({
	                 backgroundPosition: coords
	             });
	         });
	     });
	 });

	 /* =================================
	 ===	WOW ANIMATION ====
	 =================================== */

	 new WOW().init();
