$(document).ready(function($){


    $('#categories ul').hide();
    
    $('#categories li.current').parent().show();

    $('.result-for-categories').hide();


    $('#categories li').click(function() {
    	$('.result-for-categories').show();
    	var sub = $(this).children('#categories ul').clone().addClass('vision');
    	$('#res').html(sub);
    	  
    });
});