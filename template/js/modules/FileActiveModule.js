export default function FileActiveModule() {
  

    $('.tab-link-mobi').on('click', function () {
        $('.tab-link').slideToggle();
    });


    $('.lic-like').on('click', function () {
        $(this).toggleClass('active');
    });
}