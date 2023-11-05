import * as wmFunctions from "./modules/functions.js"

wmFunctions.isWebp();
wmFunctions.banner();

const products = document.querySelector('.products');
const login = document.querySelector('.login');
const cabinet = document.querySelector('.cabinet');
wmFunctions.tabs(cabinet);
wmFunctions.tabs(products);
wmFunctions.tabs(login);
wmFunctions.headerFunctions();
wmFunctions.rate();
wmFunctions.accordion(false);
wmFunctions.accordionMobile(false);
wmFunctions.dropFile();
wmFunctions.readMore();
wmFunctions.locomotivescroll();
wmFunctions.modal();
wmFunctions.blogSlider();
wmFunctions.certs();
