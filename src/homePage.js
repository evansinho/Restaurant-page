const homePage = () => {
  const home = document.createElement('div');
  home.classList.add('showcase');

  const textHeader = document.createElement('h1');
  textHeader.innerText = 'WELCOME TO AFRICAN KITCHEN';
  const textSmall = document.createElement('p');
  textSmall.innerText = 'The home of Africa\'s finest cuisines.';
  const button = document.createElement('button');
  const buttonText = document.createElement('a');
  buttonText.classList.add('btn-menu');
  buttonText.innerText = 'VIEW MENU';
  button.appendChild(buttonText);

  home.appendChild(textHeader);
  home.appendChild(textSmall);
  home.appendChild(button);

  return home;
};

export default homePage;
