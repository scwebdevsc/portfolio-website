/* CLOSING MENU */
function hideMenu() {
  let menuOpen = document.querySelector(".toggler").checked;
  if ((menuOpen = true)) {
    document.querySelector(".toggler").checked = false;
  }
}
window.addEventListener("scroll", hideMenu);
/* NAVBAR CHANGE ON SCROLL */
document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 100 ) {
    header.style.backgroundColor = 'rgb(206, 212, 218)';
    header.style.borderBottom = "1px solid black";
  } else {
    header.style.backgroundColor = 'transparent'
    header.style.borderBottom = 'none'
  }
});
/* TYPEWRITING EFFECT */
let textDiv = document.querySelector('.banner__heading');
let text = "Srđan Cvijetić";
let i = 0;
function type() {
  if(i < text.length) {
    textDiv.innerHTML += text.charAt(i);
    i++
    setTimeout(type, Math.floor(Math.random() * 150) + 100);
  } 
}
type();