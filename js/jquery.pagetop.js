//pagetop 追従  フッター位置固定なし
$(document).ready(function(){
    $(".md_page_top").hide();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $(".md_page_top").fadeIn("fast");
        } else {
            $(".md_page_top").fadeOut("fast");
        }
    });
    $('.md_page_top').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 400);
        return false;
    });
});
