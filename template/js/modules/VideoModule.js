export default function VideoModule() {
    if ($('.bx-video').length) {
        var player = fluidPlayer(
            'my-video', {
            "layoutControls": {
                "autoPlay": false,
                "mute": true,
                "allowTheatre": true,
                "playPauseAnimation": true,
                "playbackRateEnabled": true,
                "allowDownload": false,
                "playButtonShowing": true,
                "fillToContainer": false,
                "primaryColor": "#EA412C",
                // "posterImage": "",
                "posterImage": './img/bg-post-video.png' // Default false
            },
            }
        );
        
    }

   
}