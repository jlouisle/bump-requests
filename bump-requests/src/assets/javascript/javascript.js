$(document).ready(function(){
    $('ul.nav a').click(function(list_item){
        if(!$(this).siblings().hasClass('nav-second-level')){
            $('ul.nav a').removeClass('active');
            $(this).addClass('active');
        }
    });
});
