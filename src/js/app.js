$(document).ready(function() {
    $('.partners__slide').slick({
        infinite: false
    });
    new WOW().init();

    function countup(className){ //className - имя класса, в котором есть число
        var countBlockTop = $("."+className).offset().top; //смещение блока с числом относительно верхнего края	
        var windowHeight = window.innerHeight;//высота окна браузера
	    var show = true;// отвечает, что если один раз счетчик сработает, больше не срабатывал
					
        $(window).scroll( function (){
            if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
                show = false; //если мы видим число, то больше его не надо показывать
                            
                $('.'+className).spincrement({ //вызов плагина с параметрами 
                    from: 1,               //начинать с 1
                    duration: 4000,        //задержка счетчика
                });
            }
        })	
    }

    $(function() {
        countup("about__num");
    });

    const mobile_menu = document.getElementById('nav');
    const punkt_menu = document.querySelectorAll(".nav__list li a");
    const nav_trigger = document.querySelector('.nav-trigger')
    
    console.log(punkt_menu);

    for(i = 0; i < punkt_menu.length; i++) {
        punkt_menu[i].addEventListener('click', function() {
            mobile_menu.classList.add('out');
            mobile_menu.classList.remove('in');
            nav_trigger.classList.remove('close');
            nav_trigger.classList.add('open');
        })
    }

$('a').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
            scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 500 // скорость прокрутки
        );
    }
    return false;
});
});