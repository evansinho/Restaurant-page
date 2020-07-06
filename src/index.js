import navigation from './navBar';
import showcase from './homePage';
import menuItem from './menu';
import contactUs from './contact';

const navbar = navigation();
const showcaseText = showcase();
const menuPage = menuItem();
const contactPage = contactUs();

const content = document.querySelector('#content');

content.appendChild(navbar);
content.appendChild(showcaseText);
content.appendChild(menuPage);
content.appendChild(contactPage);
