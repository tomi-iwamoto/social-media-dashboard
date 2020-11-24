let darkmode = localStorage.getItem('darkmode');
let mode = document.getElementById('mode');


const darkmodeToggle = document.getElementById('chk');

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'enabled');
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
}

if(darkmode === 'enabled'){
  enableDarkmode();
}

darkmodeToggle.addEventListener('click', ()=> {
  darkmode = localStorage.getItem('darkmode');

  if(darkmode !== 'enabled'){
    enableDarkmode();
    mode.innerHTML = 'Light Mode';
  } else {
    disableDarkmode();
    mode.innerHTML = 'Dark Mode';
  }



});


