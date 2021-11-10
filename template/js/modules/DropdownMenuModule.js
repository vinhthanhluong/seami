export default function DropdownMenuModu() {
    // if ($('.dropdown .fa').length) {

    //     $('.dropdown .fa').click(function () {
           
    //        $(this).toggleClass('--show');
    //        
    //     });
        
    // }

   

    document.querySelectorAll('.header-menu-nav .dropdown').forEach(el => {
        const dropdown = el;
        const arrows = document.createElement("i");
        arrows.classList.add('fa', 'fa-angle-down');
        dropdown.querySelector('a').appendChild(arrows);
        arrows.onclick = function (a) {
            a.preventDefault();
            $(this).parent().next('.sub-menu').slideToggle();
            $(this).toggleClass('--show');
            $(this).closest('.dropdown').siblings().find('.sub-menu').slideUp();
            $(this).closest('.dropdown').siblings().find('i').removeClass('--show');
            $(this).parent().next('.mega-menu').addClass('active');
        }
    });
    

    const $width = $(window).width();
    if ($('.mega-menu').length > 0 && $width < 1200) {
        document.querySelectorAll('.mega-menu .drop-mega').forEach(el => {
            const mega = el;
            const arrows =  mega.querySelector('.drop-mega > a');
            arrows.onclick = function (a) {
                a.preventDefault();
               
                $(this).next('.mega-list').slideToggle();
                $(this).toggleClass('show');
                $(this).closest('.drop-mega').siblings().find('.mega-list').slideUp();
                $(this).closest('.drop-mega').siblings().find('a').removeClass('show');
            }
           
        });
    
        const arrow_new =  document.querySelector('.mega-back');
        arrow_new.onclick = function (a) {
            a.preventDefault();
            $(this).parent('.mega-menu').removeClass('active');
            $(this).closest('.dropdown').children().find('i').removeClass('--show');
        }
        
    }

    

}