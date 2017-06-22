$(document).ready(function($){

    $('li ul').hide();

	$(document).on('click', 'ul li', function(){
    	$(this).siblings().removeClass('focus');
        
        //находим под-меню, клонируем
        var sub = $(this).children('li ul').clone().addClass('vision'); 
        //добавляем в динамический див наш клонированный кусок
        var div = $('<div class="categories-wrap"></div>').html(sub);

        $(this).addClass('focus');
        
        //
        var aaa = $(this).parents('.categories-wrap').next('.categories-wrap');
        if (aaa.length) {
            aaa.html(sub);
            aaa.nextAll('.categories-wrap').remove();
        }
        else
            $(this).parents('.categories-wrap').after(div);

    });
    
});
