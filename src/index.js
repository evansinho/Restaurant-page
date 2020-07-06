import navigation from './navBar';

const navbar = navigation();

const content = document.querySelector('#content');

content.appendChild(navbar);