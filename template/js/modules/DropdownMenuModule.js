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
        }
    });

    // document.querySelectorAll('.header-menu-nav .dropdown').forEach(el => {
    //     const dropdown = el;
    //     const arrows = document.createElement("i");
    //     arrows.classList.add('fa', 'fa-angle-down');
    //     dropdown.querySelector('a').appendChild(arrows);
    //     arrows.onclick = function (a) {
    //         a.preventDefault();
    //         $(this).parent().next('.sub-box').children('.sub-menu').slideToggle();
    //         $(this).toggleClass('--show');
    //         $(this).closest('.dropdown').siblings().find('.sub-menu').slideUp();
    //     }
    // });

    if ($('.mega-menu').length > 0) {
        // $('.mega-menu .drop-mega').on('click', function () {
        //     $(this).toggleClass('active');
        //     $(this).siblings().removeClass('active');
            
        // });
        
    }

    

}