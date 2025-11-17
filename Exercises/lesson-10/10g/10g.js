function switchToggle(buttonElement) {
  // const buttonElement = document.querySelector(button_name);

  const gaming = document.querySelector('.js-gaming-button');
  const music = document.querySelector('.js-music-button');
  const tech = document.querySelector('.js-tech-button');
  const anime = document.querySelector('.js-anime-button');

  gaming.classList.remove('toggle-off-button');
  gaming.classList.add('toggle-on-button');
  music.classList.remove('toggle-off-button');
  music.classList.add('toggle-on-button');
  tech.classList.remove('toggle-off-button');
  tech.classList.add('toggle-on-button');
  anime.classList.remove('toggle-off-button');
  anime.classList.add('toggle-on-button');


  const istoggle = buttonElement.classList.contains("toggle-on-button");

  if (istoggle) {
    buttonElement.classList.add("toggle-off-button");
    buttonElement.classList.remove("toggle-on-button");
  } 
  // else if (!istoggle) {
  //   buttonElement.classList.add("toggle-on-button");
  //   buttonElement.classList.remove("toggle-off-button");
  // }
}
