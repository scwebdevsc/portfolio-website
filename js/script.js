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
