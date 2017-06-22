$(document).ready(function($){

    $('li ul').hide();
    
    // $('ul li.current').parent().show();

    $('.result-for-categories').hide();
	$(document).on('click', 'ul li', function(){

    	$('.result-for-categories').show();
    	var sub = $(this).children('li ul').clone().addClass('vision');
    	// $('.result-for-categories').html(sub);
    	
    	$('.result-for-categories').append('<div class="dynamic-res">');
    	$('.result-for-categories').find('.dynamic-res').html(sub);

    	
    });
    
});
