$(document).ready(function(){

	$('.hide').click(function(){
	     $('#box').hide();
	});

	$('.show').click(function(){
	     $('#box').show();
	});

	$('.fade').click(function(){
	     $('#box').fadeOut();
	});

	$('.toggle').click(function(){
	     $('#box').toggle();
	});

	$('.slide-up').click(function(){
	     $('#box').slideUp();
	});
	
	$('.slide-toggle').click(function(){
	     $('#box').slideToggle();
	});

});