export default function LightGalleryModule(){
    if ($('#lightgallery').length) {

        $("#lightgallery").lightGallery({
            selector: ".gallery-img",
            thumbnail: true,
            // animateThumb: false,
            // showThumbByDefault: false
            download: false,
        });
    }

   
}