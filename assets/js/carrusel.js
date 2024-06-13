var swiperLeft = new Swiper(".mySwiper-left", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        991: {
            slidesPerView: 4
        }
    }
});

var swiperRight = new Swiper(".mySwiper-right", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        reverseDirection: true, // Hace que el carrusel se mueva en la dirección opuesta
        disableOnInteraction: false,
    },
    breakpoints: {
        991: {
            slidesPerView: 4
        }
    }

});

var players = [];

		function onYouTubeIframeAPIReady() {
			var elements = document.getElementsByClassName('youtube-player');
			for (var i = 0; i < elements.length; i++) {
				var player = new YT.Player(elements[i], {
					videoId: elements[i].dataset.id,
					playerVars: {
						'autoplay': 1,
						'loop': 1,
						'playlist': elements[i].dataset.id,
						'mute': 1
					},
					events: {
						'onReady': onPlayerReady
					}
				});
				players.push(player);
			}
		}

		function onPlayerReady(event) {
			event.target.mute();
		}



