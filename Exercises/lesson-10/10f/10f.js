document.querySelector(".js-gaming-button").classList.add("toggle-on-button");
document.querySelector(".js-music-button").classList.add("toggle-on-button");
document.querySelector(".js-tech-button").classList.add("toggle-on-button");
document.querySelector(".js-anime-button").classList.add("toggle-on-button");

function switchToggle(button_name){
  const buttonElement = document.querySelector(button_name);
  const istoggle = buttonElement.classList.contains("toggle-on-button");

  if (istoggle) {
    buttonElement.classList.add("toggle-off-button");
    buttonElement.classList.remove("toggle-on-button");
  } else {
    buttonElement.classList.add("toggle-on-button");
    buttonElement.classList.remove("toggle-off-button");
  }
}
