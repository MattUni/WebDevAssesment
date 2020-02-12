const menuToggle=document.getElementById('menu-toggle')
const menuNav=document.getElementById('menu-nav')

toggleMenu=()=>{
  console.log("called toggleMenu")
  menuNav.classList.toggle("menu-toggle")
}

menuToggle.addEventListener("click",toggleMenu)
