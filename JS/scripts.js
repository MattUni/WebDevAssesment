const menuToggle=document.getElementById('menu-toggle');
const menuNav=document.getElementById('menu-nav');
const submitButton=document.getElementById('submit');
const clearButton=document.getElementById('clearAll');
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
  const deleteButton = document.createElement('button');
  deleteButton.textContent= 'x';
  itemElement.appendChild(deleteButton);
  deleteButton.addEventListener('click', ev =>{
    list1.removeChild(itemElement);
  });
  list1.appendChild(itemElement);
}

function allClear(){
  while (list1.firstChild) {
    list1.removeChild(list1.firstChild);
  }
}
function renderList(list) {
  list.forEach(addItem);
}

menuToggle.addEventListener("click", toggleMenu);

submitButton.addEventListener("click", ev => {
  if(itemName.value){
    addItem();
    itemName.value=null;
  }
});

clearButton.addEventListener("click", allClear);

window.addEventListener('beforeunload', ev =>{
  const items = [...list1.childNodes];
  if(items.length){
    const list = items.map(item=> {
      return items.textContent.slice(0, -1);
    });
    localStorage.setItem('test-list', list.join('\n'));
  } else{
    localStorage.removeItem('test-list');
  }
});

window.addEventListener('DOMContentLoaded', ev =>{
  const testlist = localStorage.getItem('test-list');
  console.log(testlist);
  if(testlist){
    renderList(testlist.split(','));
  }
});
