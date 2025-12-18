$(function() {
    $(window).on('scroll', function() {
        let scrollTop = $(window).scrollTop();

        // 1. ヘッダーを消す (30px以上)
        if (scrollTop > 30) {
            $('header').addClass('active_header');
        } else {
            $('header').removeClass('active_header');
        }

        // 2. 1番目の作品を出す (60px以上)
        if (scrollTop > 60) {
            $('.first_work').addClass('active_first_work');
        } else {
            $('.first_work').removeClass('active_first_work');
        }

        // 3. 2番目の作品を出す (90px以上)
        if (scrollTop > 90) {
            $('.second_work').addClass('active_second_work');
        } else {
            $('.second_work').removeClass('active_second_work');
        }

        // 4. 3番目の作品を出す (120px以上)
        if (scrollTop > 120) {
            $('.third_work').addClass('active_third_work');
        } else {
            $('.third_work').removeClass('active_third_work');
        }

        // 5. その他の作品を出す (150px以上)
        if (scrollTop > 150) {
            $('.other_work').addClass('active_other_work');
        } else {
            $('.other_work').removeClass('active_other_work');
        }
    });
});
