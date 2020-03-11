const menuToggle=document.getElementById('menu-toggle');
const menuNav=document.getElementById('menu-nav');
const submitButton=document.getElementById('submit');
const gothType=document.getElementById('type');
const list1=document.getElementById('testlist');


toggleMenu=()=>{
  console.log("called toggleMenu");
  menuNav.classList.toggle("menu-toggle");
};

typeGet=()=>{
  return gothType.options[gothType.selectedIndex].value;
};

function addItem (item){
  const itemElement = document.createElement('li');
  itemElement.textContent = item;
  list1.appendChild(itemElement);
}

menuToggle.addEventListener("click",toggleMenu);
submitButton.addEventListener("click", addItem);
