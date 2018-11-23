console.log("* customized.js exist *");


var findSwiper = $('body').find('div');

if( findSwiper.hasClass(".swiper-container") ){ // .hasClass() returns BOOLEAN true/false

  		var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    paginationClickable: true,
                    spaceBetween: 30,
					autoplay: 2500,
					autoplayDisableOnInteraction: false,
					breakpoints: {
						1024: {	slidesPerView: 3, spaceBetween: 40 },
						768: { slidesPerView: 3, spaceBetween: 30 },
						640: { slidesPerView: 1, spaceBetween: 20 },
						320: { slidesPerView: 1, spaceBetween: 10 }
					}			
            });

}else{
	console.log("--> Swiper didn't found");
}






