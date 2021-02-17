let darkmode = localStorage.getItem('darkmode');
const darkmodeToggle = document.getElementById('chk');


//Functions to enable and disable dark mode

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

//Dark / Light mode toggle button 
darkmodeToggle.addEventListener('click', ()=> {
  darkmode = localStorage.getItem('darkmode');

  if(darkmode !== 'enabled'){
    enableDarkmode();
  } else {
    disableDarkmode();
  }


});


