export default function MasonryModule() {
    $('.grid').masonry({
        percentPosition: true,
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',

        horizontalOrder: false,
        // isFitWidth: true
        // fitWidth: true,
    });
}