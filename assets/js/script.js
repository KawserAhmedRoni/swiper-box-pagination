(function ($) {
	("use strict");

	const swiper = new Swiper(".mySwiper", {
		spaceBetween: 30,
		pagination: {
			el: ".swiper-dot",
			clickable: true,
			renderBullet: function (index, className) {
				// Select content from the .dot-content elements
				const dotContent = document.querySelectorAll(
					".swiper-dot .dot-content"
				);
				return `
                <span class="${className}">
                    ${dotContent[index]?.outerHTML || ""}
                </span>
            `;
			},
		},
	});
})(jQuery);
