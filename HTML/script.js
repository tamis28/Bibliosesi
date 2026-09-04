const menuBtn = document.querySelector('.bt-menu');
const nav = document.querySelector('.navegar nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  if (nav.classList.contains('active')) {
    document.querySelector('main').style.filter = "grayscale(100%) blur(3px)";
  } else {
    document.querySelector('main').style.filter = "grayscale(0) blur(0)";
  }
});



function logoff(){
  localStorage.removeItem('dados')
  localStorage.removeItem('token')
  window.location.href = 'login.htm';
}
