import "./styles.css";
import { homepageLoad } from './homepage.js';
import { menuPage } from './menu.js';
import { aboutPage } from './about.js';


console.log('Test JS is working');

homepageLoad();

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

homeBtn.addEventListener('click', homepageLoad);
menuBtn.addEventListener('click', menuPage);
aboutBtn.addEventListener('click', aboutPage);

