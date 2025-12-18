$(function(){
    $(window).on("scroll",function(){
        if ($(window).scrollTop() > 30){
            $("header").addClass("active_header");
            $(".first_work").addClass("active_first_work");
        } else {
            $("header").removeClass("active_header");
            $(".first_work").removeClass("active_first_work");
        }
    });

    $(window).on("scroll",function(){
        if($(window).scrollTop() > 60){
            $(".first_work").addClass("active_first_work");
        } else {
            $(".first_work").removeClass("active_first_work");
        }
    });

    $(window).on("scroll",function(){
        if($(window).scrollTop() > 90){
            $(".second_work").addClass("active_second_work");
        } else {
            $(".second_work").removeClass("active_second_work");
        }
    });

    $(window).on("scroll",function(){
        if($(window).scrollTop() > 120){
            $(".third_work").addClass("active_third_work");
        } else {
            $(".third_work").removeClass("active_third_work");
        }
    });

    $(window).on("scroll",function(){
        if($(window).scrollTop() > 150){
            $(".other_work").addClass("active_other_work");
        } else {
            $(".other_work").removeClass("active_other_work");
        }
    });
});