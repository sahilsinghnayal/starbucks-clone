const btn=document.getElementById('menu-btn')
const nav = document.getElementById('menu')

function navbartoggle() {
btn.classList.toggle('open')
// console.log(2);
nav.classList.toggle('hidden')
document.body.classList.toggle('no-scroll')

}
btn.addEventListener('click', navbartoggle) 