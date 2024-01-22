/*кнопка на верх*/

var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки
$(document).ready(function () {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });

    function get_random_color() {
        return "#" + ((1 << 24) * Math.random() | 0).toString(16);
    }
    var $user_name = $('.user_name');
    var $ava = $('.ava');
    var color;
    for (i = 0; i <= $user_name.length; i++) {
        color = get_random_color();
        $($ava[i]).css('box-shadow', '0px 0px 10px 3px' + color);
        $($user_name[i]).css('color', color)
    };
    
    var caret = true;
    $('.caret').on('click', function () {
        if (caret == true) {
            $(this).addClass('active');
            caret = false;
        } else {
            $(this).removeClass('active');
            caret = true;
        }
    });

    var lastGameDataMore = true;
    $('.lastGameDataMore').on('click', function () {
        if (lastGameDataMore == true){
            $('#accordion').addClass('active');
            setTimeout(function(){
                $('.lastGameBlockUsers').addClass('active');
        },1000);
            lastGameDataMore = false;
        } else {
            $('#accordion').removeClass('active');
            $('.lastGameBlockUsers').removeClass('active');
            lastGameDataMore = true;
        }
    })
});















