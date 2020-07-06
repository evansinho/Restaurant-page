import navigation from './navBar';
import showcase from './homePage';
import menuItem from './menu';

const navbar = navigation();
const showcaseText = showcase();
const menuPage = menuItem();

const content = document.querySelector('#content');

content.appendChild(navbar);
content.appendChild(showcaseText);
content.appendChild(menuPage);
