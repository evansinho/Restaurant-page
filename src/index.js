import navigation from './navBar';
import showcase from './homePage';

const navbar = navigation();
const showcaseText = showcase();

const content = document.querySelector('#content');

content.appendChild(navbar);
content.appendChild(showcaseText);
