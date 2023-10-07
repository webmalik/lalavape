import $ from "jquery";
import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function isWebp() {
	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
}

export function burgerMenu() {
	$('.header__burger').on("click", function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
}

export function sticky() {
	window.addEventListener('scroll', function () {
		$('header').toggleClass('sticky', window.scrollY > 0);
	});
}

export function pageNav() {
	const headerLinks = $('.header__link');

	headerLinks.each(function () {
		$(this).on('click', function (event) {
			event.preventDefault();

			const targetId = $(this).attr('href');
			const targetElement = $(`${targetId}:first`);
			const targetOffset = targetElement.offset().top - 100;
			$('html, body').animate({
				scrollTop: targetOffset
			}, 800);
		});
	});

	function activateMenuItem() {
		const scrollPosition = $(window).scrollTop();

		headerLinks.each(function () {
			const section = $(`${$(this).attr('href')}:first`);
			if (
				section.offset().top <= scrollPosition + 105 &&
				section.offset().top + section.outerHeight() > scrollPosition + 105
			) {
				headerLinks.removeClass('active');
				headerLinks.parent().removeClass('active');
				$(this).addClass('active');
				$(this).parent().addClass('active');
			}
		});
	}

	$(window).on('scroll', activateMenuItem);
}

export function banner() {
	const banner = new Swiper('.banner__container', {
		loop: true,
		modules: [Pagination],
		slidesPerView: 1,
		pagination: {
			el: '.banner__pagination',
			clickable: true,
		},
	});
}

export function productsSlider() {
	const products = new Swiper('.products__wrapper', {
		loop: true,
		modules: [Navigation],
		slidesPerView: 5,
		navigation: {
			nextEl: '.products__next',
			prevEl: '.products__prev',
		},
	});
}

export function tabs() {
	document.addEventListener("DOMContentLoaded", function () {
		const tabButtons = document.querySelectorAll(".tab__button");
		const tabContents = document.querySelectorAll(".tab__content");

		tabButtons.forEach(function (button) {
			button.addEventListener("click", function () {
				const tabId = this.getAttribute("data-tab");
				showTab(tabId);
			});
		});

		function showTab(tabId) {
			tabContents.forEach(function (content) {
				content.classList.remove("active");
			});
			tabButtons.forEach(function (button) {
				button.classList.remove("active");
			});

			let el = document.querySelectorAll(`[data-tab="${tabId}"]`);

			el.forEach(function (element) {
				element.classList.add('active');
			});
		}

		showTab(tabButtons[0].getAttribute("data-tab"));
	});
}