export const hideMenu = () => {
  const menu = document.getElementById('menu');
  menu.style.display = 'none'; // Hide the menu
};

export const showMenu = () => {
  const menu = document.getElementById('menu');
  menu.style.display = 'block'; // Show the menu
};


export const startExperience = (controls) => {
  controls.lock(); 
  hideMenu();
};

export const setupPlayButton = (controls) => {
  const playButton = document.getElementById('play_button'); 
  playButton.addEventListener('click', () => startExperience(controls));
};
