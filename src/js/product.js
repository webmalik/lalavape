import * as wmFunctions from "./modules/functions.js"

wmFunctions.isWebp();
wmFunctions.banner();

const login = document.querySelector('.login');
const product = document.querySelector('.product');

wmFunctions.productSliders();

wmFunctions.tabs(login);
wmFunctions.tabs(product);


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
