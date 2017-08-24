/**
 * ...
 * @author Themba
 */
 
 $( document ).ready(function() {
	TweenMax.to($('.wrapper'), 3, {backgroundPosition: "0 -200px"});
	
	TweenMax.set( $('.slide'), {x: 110, opacity:0 } );
	TweenMax.staggerTo( $('.slide'),1,  {x: 0, opacity:1, delay: 1 }, .15 );
	
	TweenMax.set($('#finalLine'), {y: 20, opacity:0});
	TweenMax.to($('#finalLine'), 1, {y: 0, opacity:1, delay: 2});
});