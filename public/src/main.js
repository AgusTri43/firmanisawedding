import {home} from "./js/home.js";
import {time} from "./js/time.js";
import { submitUcapanForm} from './js/ucapan.js';
import {navbar} from "./js/navbar.js";
import {welcome} from "./js/welcome.js";

// load content
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    welcome();
    navbar();
    home();
    time();
    submitUcapanForm();
});