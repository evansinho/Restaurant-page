const navbar = () => {
  const nav = document.createElement('nav');
  // logo
  const logo = document.createElement('div');
  logo.classList.add('nav-logo');
  const logoHeader = document.createElement('h1');
  logoHeader.innerText = 'AFRICAN KITCHEN';

  logo.appendChild(logoHeader);

  // navigation bar
  const container = document.createElement('ul');
  container.classList.add('nav-list');

  const homeBtn = document.createElement('li');
  const home = document.createElement('a');
  home.innerText = 'HOME';
  homeBtn.classList.add('nav-items');
  homeBtn.id = ('home');
  homeBtn.appendChild(home);

  const menuBtn = document.createElement('li');
  const menu = document.createElement('a');
  menu.innerText = 'MENU';
  menuBtn.classList.add('nav-items');
  menuBtn.id = ('menu');
  menuBtn.appendChild(menu);

  const contactBtn = document.createElement('li');
  const contact = document.createElement('a');
  contact.innerText = 'CONTACT';
  contactBtn.classList.add('nav-items');
  contactBtn.id = ('contact');
  contactBtn.appendChild(contact);

  container.appendChild(homeBtn);
  container.appendChild(menuBtn);
  container.appendChild(contactBtn);

  nav.appendChild(logo);
  nav.appendChild(container);

  return nav;
};

export default navbar;
