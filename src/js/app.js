import * as wmFunctions from "./modules/functions.js"

wmFunctions.isWebp();
wmFunctions.banner();

const products = document.querySelector('.products');
const login = document.querySelector('.login');
wmFunctions.tabs(products);
wmFunctions.tabs(login);

wmFunctions.rate();
wmFunctions.accordion(false);
wmFunctions.dropFile();
wmFunctions.readMore();
wmFunctions.locomotivescroll();
wmFunctions.modal();
wmFunctions.blogSlider();
wmFunctions.certs();
