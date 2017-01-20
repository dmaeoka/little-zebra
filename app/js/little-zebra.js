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

	     var $val_animal    = $('#animal').val();
	     var $animal_holder = $('#animal-holder');
	     var $buttons       = $('.donation-value .btn-group .btn');
	     var $donation      = $('#donation_value');
	     
	     $('#animal-holder').removeClass().addClass($val_animal);
	     $(document).on('change','#animal',function(){
	     	$this = $(this);
	     	$animal_holder.removeClass().addClass($this.val());
	     });

	     $(document).on('submit','#form-donation',function(){
	     	if ($donation.val() != '') {
	     		return true;
	     	} else {
	     		alert('Want to help us?? Please, select a value to donate!');
	     		return false;
	     	}
	     });

	     
	     $(document).on('click','.donation-value .btn-group .btn',function(){
	     	$this = $(this);
	     	$val = $this.find('input').val();
	     	$donation.val($val);
	     	$donation.attr('min',$val);
	     });

	     $(document).on('blur','#donation_value',function(){
	     	var $this  = $(this);
	     	var $val   = $(this).val();
	     	
	     	$buttons.each(function(i){
	     		var $btn = $(this);
	     		if ($btn.is('checked') === false) {
	     			$donation.attr('min',11);
	     		}
	     	})

	     	if (parseInt($val)>10) {
	     		$buttons.each(function(){
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
