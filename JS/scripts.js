const menuToggle=document.getElementById('menu-toggle');
const menuNav=document.getElementById('menu-nav');
const submitButton=document.getElementById('submit');
const gothType=document.getElementById('type');
const itemName=document.getElementById('itemname');
const list1=document.getElementById('testlist');


toggleMenu=()=>{
  console.log("called toggleMenu");
  menuNav.classList.toggle("menu-toggle");
};

typeGet=()=>{
  return gothType.options[gothType.selectedIndex].value;
};


function addItem(item){
  const itemElement = document.createElement('li');
  itemElement.textContent = itemName.value;
  list1.appendChild(itemElement);
  console.log(itemElement);
  console.log(itemName.value);
}

menuToggle.addEventListener("click", toggleMenu);
submitButton.addEventListener("click", addItem);
