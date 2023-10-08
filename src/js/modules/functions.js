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


let productsSwiper = null;

function destr() {
	if (productsSwiper) {
		productsSwiper.destroy(true, true);
	}
}

function productsSlider() {

	let activeTab = document.querySelector('.products__slider.active');

	if (activeTab) {
		productsSwiper = new Swiper(activeTab, {
			loop: true,
			modules: [Navigation],
			spaceBetween: 20,
			slidesPerView: 5,
			navigation: {
				nextEl: '.products__next',
				prevEl: '.products__prev',
			},
		});
	}
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
				if (content.getAttribute("data-tab") === tabId) {
					content.classList.add("active");
					content.style.display = "flex";
				} else {
					content.classList.remove("active");
					content.style.display = "none";
				}
			});
			tabButtons.forEach(function (button) {
				if (button.getAttribute("data-tab") === tabId) {
					button.classList.add("active");
				} else {
					button.classList.remove("active");
				}
			});

			destr();
			productsSlider();
		}

		showTab(tabButtons[0].getAttribute("data-tab"));
	});
}

export function rate() {
	let Circle = function (sel) {
		let circles = document.querySelectorAll(sel);
		[].forEach.call(circles, function (el) {
			let valEl = parseFloat(el.innerHTML);
			valEl = (valEl * 2800) * 2 / 100;
			el.innerHTML = '<svg width="120" height="120"><circle transform="rotate(-90)" r="50" cx="-60" cy="60" /><circle transform="rotate(-90)" style="stroke-dasharray:' + valEl + 'px 408px;stroke-linecap: round;" r="50" cx="-60" cy="60" /></svg>';

		});
	};
	Circle('.reviews__circle');
}

export function accordion(mode = true) {
	const accordionTriggers = document.querySelectorAll('.accordion-trigger');

	// Додати обробник подій для кожного заголовку
	accordionTriggers.forEach(trigger => {
		trigger.addEventListener('click', () => {
			if (mode) {
				// Закрити всі аккордеони, крім того, який був клікнутий
				accordionTriggers.forEach(otherTrigger => {
					if (otherTrigger !== trigger) {
						otherTrigger.classList.remove('active');
						const otherContent = otherTrigger.nextElementSibling;
						let parentContainer = otherTrigger.parentNode.parentNode;
						otherContent.classList.remove('active');
					}
				});
			}

			trigger.classList.toggle('active');

			const content = trigger.nextElementSibling;

			content.classList.toggle('active');
		});
	});
}