import $ from "jquery";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import LocomotiveScroll from "locomotive-scroll";
import { Fancybox } from "@fancyapps/ui";
import noUiSlider from 'nouislider';


import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'nouislider/dist/nouislider.css';

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

export function headerFunctions() {
	const searchButton = document.querySelector('.header__search-mobile');
	const searchClose = document.querySelector('.search__close');
	const searchInput = document.querySelector('.header__search');
	if (searchButton) {
		if (innerWidth < 768) {
			searchButton.addEventListener('click', (e) => {
				e.preventDefault();
				searchInput.classList.add('active');
			});
			searchClose.addEventListener('click', (e) => {
				e.preventDefault();
				searchInput.classList.remove('active');
			});
		}
	}

	const headerButton = document.querySelector('.header__mobile-button');
	const menuBG = document.querySelector('.mmenu__bg');
	const menuClose = document.querySelector('.mmenu__close');
	const menu = document.querySelector('.mmenu');

	headerButton.addEventListener('click', () => {
		menu.classList.add('active');
		menuBG.classList.add('active');
	});
	menuBG.addEventListener('click', () => {
		menu.classList.remove('active');
		menuBG.classList.remove('active');
	});
	menuClose.addEventListener('click', () => {
		menu.classList.remove('active');
		menuBG.classList.remove('active');
	});


}

export function filterMobile() {
	const filterClose = document.querySelector('.filter__close');
	const filter = document.querySelector('.filter');
	const filterBG = document.querySelector('.filter__bg');
	const filterBTN = document.querySelector('.catalog__filter-btn');


	if (filter) {
		filterBTN.addEventListener('click', (e) => {
			e.preventDefault();
			filter.classList.add('active');
			filterBG.classList.add('active');
		});
		filterClose.addEventListener('click', () => {
			filter.classList.remove('active');
			filterBG.classList.remove('active');
		});
		filterBG.addEventListener('click', () => {
			filter.classList.remove('active');
			filterBG.classList.remove('active');
		});
	}
}

export function sticky() {
	window.addEventListener('scroll', function () {
		$('header').toggleClass('sticky', window.scrollY > 0);
	});
}

export function certs() {
	Fancybox.bind('[data-fancybox="gallery"]', {
		toolbar: "auto",
		loop: true,
		animationEffect: "zoom-in-out",
		transitionEffect: "fade",
		buttons: ["zoom", "slideShow", "fullScreen", "close"],
		Thumbs: {
			autoStart: true,
			hideOnClose: true,
		},
		touch: {
			vertical: false,
		},
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
		speed: 800,
		modules: [Pagination, Autoplay],
		slidesPerView: 1,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
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
			modules: [Pagination, Navigation],
			spaceBetween: 9,
			slidesPerView: 2,
			navigation: {
				nextEl: '.products__next',
				prevEl: '.products__prev',
			},
			pagination: {
				el: '.products__paginations',
				clickable: true,
				dynamicBullets: true,
				dynamicMainBullets: 4,
			},

			breakpoints: {
				1200: {
					slidesPerView: 5,
					spaceBetween: 20,
				},
				1000: {
					slidesPerView: 4,
					spaceBetween: 15,
				},

				992: {
					slidesPerView: 4,
					spaceBetween: 15,
					pagination: {
						enabled: false,
					}
				},

				767: {
					slidesPerView: 4,
					spaceBetween: 12,
				},
				520: {
					slidesPerView: 3,
					spaceBetween: 10,
				}
			}
		});

	}
}

export function productSliders() {
	let slider1 = document.querySelector('.products__slider-1');
	let slider2 = document.querySelector('.products__slider-2');

	if (slider1) {
		let productsSwiper = new Swiper(slider1, {
			loop: true,
			modules: [Pagination, Navigation],
			spaceBetween: 9,
			slidesPerView: 2,
			navigation: {
				nextEl: '.products__next-1',
				prevEl: '.products__prev-1',
			},
			pagination: {
				el: '.products__paginations-1',
				clickable: true,
				dynamicBullets: true,
				dynamicMainBullets: 4,
			},

			breakpoints: {
				1200: {
					slidesPerView: 5,
					spaceBetween: 20,
				},
				1000: {
					slidesPerView: 4,
					spaceBetween: 15,
				},

				992: {
					slidesPerView: 4,
					spaceBetween: 15,
					pagination: {
						enabled: false,
					}
				},

				767: {
					slidesPerView: 4,
					spaceBetween: 12,
				},
				520: {
					slidesPerView: 3,
					spaceBetween: 10,
				}
			}
		});
	}
	if (slider2) {
		let productsSwiper2 = new Swiper(slider2, {
			loop: true,
			modules: [Pagination, Navigation],
			spaceBetween: 9,
			slidesPerView: 2,
			navigation: {
				nextEl: '.products__next-2',
				prevEl: '.products__prev-2',
			},
			pagination: {
				el: '.products__paginations-2',
				clickable: true,
				dynamicBullets: true,
				dynamicMainBullets: 4,
			},

			breakpoints: {
				1200: {
					slidesPerView: 5,
					spaceBetween: 20,
				},
				1000: {
					slidesPerView: 4,
					spaceBetween: 15,
				},

				992: {
					slidesPerView: 4,
					spaceBetween: 15,
					pagination: {
						enabled: false,
					}
				},

				767: {
					slidesPerView: 4,
					spaceBetween: 12,
				},
				520: {
					slidesPerView: 3,
					spaceBetween: 10,
				}
			}
		});
	}
}

export function blogSlider() {
	const blogSwiper = new Swiper('.blog__slider', {
		loop: true,
		modules: [Pagination, Navigation],
		spaceBetween: 9,
		slidesPerView: 2,
		navigation: {
			nextEl: '.products__next',
			prevEl: '.products__prev',
		},
		pagination: {
			el: '.products__paginations',
			clickable: true,
			dynamicBullets: true,
			dynamicMainBullets: 4,
		},

		breakpoints: {
			1200: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
			1000: {
				slidesPerView: 4,
				spaceBetween: 15,
			},

			992: {
				slidesPerView: 4,
				spaceBetween: 15,
				pagination: {
					enabled: false,
				}
			},

			767: {
				slidesPerView: 4,
				spaceBetween: 12,
			},
			520: {
				slidesPerView: 3,
				spaceBetween: 10,
			}
		}
	});
}

export function tabs(container) {
	if (container) {
		document.addEventListener("DOMContentLoaded", function () {
			const tabButtons = container.querySelectorAll(".tab__button");
			const tabContents = container.querySelectorAll(".tab__content");

			tabButtons.forEach(function (button) {
				button.addEventListener("click", function () {
					const tabId = this.getAttribute("data-tab");
					showTab(tabId);
				});
			});

			function showTab(tabId) {
				tabContents.forEach(function (content) {
					if (content.getAttribute("data-tab") === tabId) {
						content.style.opacity = 0;
						content.style.display = "flex";
						content.classList.add('active');
						setTimeout(function () {
							content.style.opacity = 1;
						}, 50);
					} else {
						content.style.opacity = 0;
						content.style.display = "none";
						setTimeout(function () {
							content.classList.remove('active');
							content.style.opacity = 0;
						}, 50);
					}
				});
				tabButtons.forEach(function (button) {
					if (button.getAttribute("data-tab") === tabId) {
						button.classList.add("active");
					} else {
						button.classList.remove("active");
					}
				});
				setTimeout(function () {
					destr();
					productsSlider();
				}, 60);

			}

			showTab(tabButtons[0].getAttribute("data-tab"));
		});
	}

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

export function accordionMobile(mode = true) {
	const accordionTriggers = document.querySelectorAll('.accordion-trigger-mobile');
	if (window.innerWidth < 767) {
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
}

export function readMore() {

	const textBlocks = document.querySelectorAll(".seo__block");
	const showMoreLink = document.querySelector(".seo__all");
	const container = document.querySelector(".seo__container");
	if (container) {
		let max = container.offsetHeight + 100;

		let initialHeight = 0;

		for (let i = 0; i < 7; i++) {
			initialHeight += textBlocks[i].offsetHeight;
		}

		container.style.maxHeight = initialHeight + "px";
		let isOpen = true;

		showMoreLink.addEventListener("click", function (event) {
			event.preventDefault();

			if (isOpen) {
				container.style.maxHeight = max + "px";
				isOpen = false;
				showMoreLink.textContent = "приховати";
				showMoreLink.classList.add('open');
			} else {
				container.style.maxHeight = initialHeight + "px";
				isOpen = true;
				showMoreLink.textContent = "читати далі";
				showMoreLink.classList.remove('open');
			}
		});
	}

}

export function locomotivescroll() {
	let locomotiveScroll;

	locomotiveScroll = new LocomotiveScroll({
		lenisOptions: {
			wrapper: window,
			content: document.documentElement,
			lerp: 0.1,
			duration: 1.2,
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
			smoothTouch: false,
			wheelMultiplier: 1,
			touchMultiplier: 2,
			normalizeWheel: true,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
		},
	});

	function sc(s = true) {
		if (s) {
			locomotiveScroll = new LocomotiveScroll({
				lenisOptions: {
					wrapper: window,
					content: document.documentElement,
					lerp: 0.1,
					duration: 1.2,
					orientation: 'vertical',
					gestureOrientation: 'vertical',
					smoothWheel: true,
					smoothTouch: false,
					wheelMultiplier: 1,
					touchMultiplier: 2,
					normalizeWheel: true,
					easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
				},
			});
		} else {
			locomotiveScroll.destroy();
		}
	}
	const scroll2 = document.querySelector('.checkout__main');
	if (scroll2) {
		const locomotiveScroll2 = new LocomotiveScroll({
			lenisOptions: {
				wrapper: scroll2,
				content: document.documentElement,
				lerp: 0.1,
				duration: 1.1,
				orientation: 'vertical',
				gestureOrientation: 'vertical',
				smoothWheel: true,
				smoothTouch: true,
				wheelMultiplier: 1,
				touchMultiplier: 2,
				normalizeWheel: true,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
			},
		});


		scroll2.addEventListener('mouseenter', () => {
			sc(false);
		});

		scroll2.addEventListener('mouseleave', () => {
			sc(true);
		});

	}

}

export function modal() {
	const open = document.querySelectorAll('.open__modal');
	const modal = document.querySelectorAll('.modal');
	let dataModal, window;

	open.forEach(function (el) {
		el.addEventListener('click', () => {
			dataModal = el.getAttribute('data-modal');

			modal.forEach(function (mod) {
				if (mod.classList.contains('active')) {
					mod.classList.remove('active');
				}
			});

			modal.forEach(function (mod) {
				if (mod.getAttribute('data-modal') === dataModal) {
					window = mod;
					window.classList.add('active');
					// setTimeout(() => {
					// 	//window.classList.remove('close__modal--animations');
					// }, 1200);

				}
			});
		});

		el.addEventListener('click', () => {
			let close = window.querySelector('.modal__close');
			let wrapper = window.querySelector('.modal__wrapper');
			//window.classList.remove('close__modal--animations');
			window.classList.add('active');

			window.addEventListener('click', (e) => {
				if (e.target != wrapper && !wrapper.contains(e.target)) {
					//window.classList.add('close__modal--animations');
					window.classList.remove('active');
				}
			});
			close.addEventListener('click', () => {
				//window.classList.add('close__modal--animations');
				window.classList.remove('active');
			});

		});
	});

}

export function dropFile() {
	const dropArea = document.getElementById('drop-area');
	const fileInput = document.getElementById('file-input');
	const imagePreview = document.getElementById('image-preview');

	dropArea.addEventListener('dragover', function (e) {
		e.preventDefault();
		dropArea.classList.add('dragover');
	});

	dropArea.addEventListener('dragleave', function () {
		dropArea.classList.remove('dragover');
	});

	dropArea.addEventListener('drop', function (e) {
		e.preventDefault();
		dropArea.classList.remove('dragover');

		const files = e.dataTransfer.files;
		handleFiles(files);
	});

	fileInput.addEventListener('change', function () {
		const files = fileInput.files;
		handleFiles(files);
	});

	function handleFiles(files) {
		for (const file of files) {
			if (file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024) {
				const image = document.createElement('img');
				image.src = URL.createObjectURL(file);
				image.className = 'preview-image';
				imagePreview.appendChild(image);
			} else if (file.size > 5 * 1024 * 1024) {
				alert('Розмір файлу перевищує 5 МБ: ' + file.name);
			} else {
				alert('Файл не є зображенням: ' + file.name);
			}
		}
	}
}

export function priceSlider() {
	const rangeSlider = document.querySelector('.filter__price-slider');

	if (rangeSlider) {
		noUiSlider.create(rangeSlider, {
			start: [0, 9999],
			connect: true,
			step: 1,
			range: {
				'min': [0],
				'max': [9999]
			}
		});

		const input0 = document.getElementById('price0');
		const input1 = document.getElementById('price1');
		const inputs = [input0, input1];

		rangeSlider.noUiSlider.on('update', function (values, handle) {
			inputs[handle].value = Math.round(values[handle]);
		});

		const setRangeSlider = (i, value) => {
			let arr = [null, null];
			arr[i] = value;

			console.log(arr);

			rangeSlider.noUiSlider.set(arr);
		};

		inputs.forEach((el, index) => {
			el.addEventListener('change', (e) => {
				console.log(index);
				setRangeSlider(index, e.currentTarget.value);
			});
		});
	}
}

export function productImages() {
	const slider = document.querySelector('.product__images');
	const slides = document.querySelectorAll('.product__image');

	if (slider && window.innerWidth < 992) {
		slider.classList.add('swiper');
		slides.forEach((slide) => {
			slide.classList.add('swiper-slide');
		})

		const imag = new Swiper(slider, {
			loop: true,
			speed: 800,
			modules: [Pagination, Autoplay],
			slidesPerView: 1,
			spaceBetween: 20,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			},
			pagination: {
				el: '.banner__pagination',
				clickable: true,
			},
		});
	}
}