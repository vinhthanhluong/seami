export default function GridModule() {
    if ($('.system-inner').length) {

        $('body').on('click', '.system-tt', function () {
            $(this).addClass('active');
            $('.system-tt').not($(this)).removeClass('active');
            var dataMap = $(".system-tt.active").data('map');
            // console.log(dataMap);
            switch (dataMap) {
                case 'map1':
                    $(".system-map > iframe").remove();
                    $(".system-map").append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3927232706574!2d106.65317391523705!3d10.781203392318242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6a88447d89%3A0xcd920c7ad690ef86!2zMjcyIEzDvSBUaMaw4budbmcgS2nhu4d0LCBQaMaw4budbmcgNiwgVMOibiBCw6xuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1636807917513!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>');
                    break;
                case 'map2':
                    $(".system-map > iframe").remove();
                    $(".system-map").append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3926546273788!2d106.65317391533412!3d10.78120866205222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec7cf0a9905%3A0x42971d0368093347!2zVHLGsOG7nW5nIFRIUFQgTmd1eeG7hW4gVGjDoWkgQsOsbmg!5e0!3m2!1svi!2s!4v1636807328797!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>');
                    break;

                case 'map3':
                    $(".system-map > iframe").remove();
                    $(".system-map").append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3927232706574!2d106.65317391523705!3d10.781203392318242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eb83343498f%3A0x58b7626d2fea51db!2sVietinBank!5e0!3m2!1svi!2s!4v1636807941295!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>');
                    break;

            }

            //    console.log(123);

        });
    }

}