import * as wmFunctions from "./modules/functions.js"

wmFunctions.isWebp();
wmFunctions.banner();

const products = document.querySelector('.products');
const login = document.querySelector('.login');
const cabinet = document.querySelector('.cabinet');
const product = document.querySelector('.product');
const checkout = document.querySelector('.checkout');

wmFunctions.tabs(cabinet);
wmFunctions.tabs(login);
wmFunctions.tabs(product);
wmFunctions.tabs(checkout);

wmFunctions.productSliders();
wmFunctions.productImages();
wmFunctions.tabs(products);

wmFunctions.headerFunctions();
wmFunctions.filterMobile();
wmFunctions.rate();


wmFunctions.accordion(false);
wmFunctions.accordionMobile(false);

wmFunctions.dropFile();
wmFunctions.readMore();
wmFunctions.locomotivescroll();
wmFunctions.modal();
wmFunctions.blogSlider();
wmFunctions.certs();
wmFunctions.priceSlider();
