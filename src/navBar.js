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
  homeBtn.classList.add('nav-items');
  homeBtn.id = ('home');
  homeBtn.innerText = 'HOME';

  const menuBtn = document.createElement('li');
  menuBtn.classList.add('nav-items');
  menuBtn.id = ('menu');
  menuBtn.innerText = 'Menu';

  const contactBtn = document.createElement('li');
  contactBtn.classList.add('nav-items');
  contactBtn.id = ('contact');
  contactBtn.innerText = 'Contact';

  container.appendChild(homeBtn);
  container.appendChild(menuBtn);
  container.appendChild(contactBtn);

  nav.appendChild(logo);
  nav.appendChild(container);

  return nav;
};

export default navbar;
