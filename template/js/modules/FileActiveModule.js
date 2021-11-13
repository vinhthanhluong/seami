export default function FileActiveModule() {
  

    $('.tab-link-mobi').on('click', function () {
        $('.tab-link').slideToggle();
    });


    $('.lic-like').on('click', function () {
        $(this).toggleClass('active');
    });

    if ($('.question-main').length) {
        
        $('.question-tt').on('click', function () {
             $(this).parent('.question-box').stop().toggleClass('active');
             $(this).next('.question-content').stop().slideToggle();
        });
     }
}