$(function(){ 

    $(window).on("scroll",function(){
        let scrollTop = $(window).scrollTop();

        if (scrollTop > 30){
            $("header").addClass("active_header");
        } else {
            $("header").removeClass("active_header");
        }

    
        if(scrollTop > 60){
            $(".first_work").addClass("active_first_work");
        } else {
            $(".first_work").removeClass("active_first_work");
        }

    
        if(scrollTop > 90){
            $(".second_work").addClass("active_second_work");
        } else {
            $(".second_work").removeClass("active_second_work");
        }

    
        if(scrollTop > 120){
            $(".third_work").addClass("active_third_work");
        } else {
            $(".third_work").removeClass("active_third_work");
        }

    
        if(scrollTop > 150){
            $(".other_work").addClass("active_other_work");
        } else {
            $(".other_work").removeClass("active_other_work");
        }
    });
});