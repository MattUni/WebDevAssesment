const menuToggle=document.getElementById('menu-toggle');
const menuNav=document.getElementById('menu-nav');
const submitButton=document.getElementById('submit');
const clearButton=document.getElementById('clearAll');
const gothType=document.getElementById('type');
const itemName=document.getElementById('itemname');
const itemLink=document.getElementById('itemlink')
const list1=document.getElementById('testlist');
const tradList=document.getElementById('tradlist');
const romList=document.getElementById('romlist');
const harajukuList=document.getElementById('harajukulist');
const cyberList=document.getElementById('cyberlist');
const vintageList=document.getElementById('vintagelist');

toggleMenu=()=>{
  console.log("called toggleMenu");
  menuNav.classList.toggle("menu-toggle");
};

typeGet=()=>{
  return gothType.options[gothType.selectedIndex].value;
};


function addItem(item, link, listname){
  const itemElement = document.createElement('li');
  itemElement.textContent = item.concat(" ").concat(link);
  switch (listname) {
    case 'Trad Goth': tradadd(itemElement);
      break;
    case 'Romance Goth': romadd(itemElement);
      break;
    case 'Harajuku-inspired': haraadd(itemElement);
    console.log("bin");
      break;
    case 'Cybergoth': cyberadd(itemElement);
      break;
    case 'Vintage Goth': vintadd(itemElement);
      break;
    default:

  }

  }


function tradadd(itemElement) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent= 'x';
  itemElement.appendChild(deleteButton);
  deleteButton.addEventListener('click', ev =>{
    tradList.removeChild(itemElement);
  });
  tradList.appendChild(itemElement)
}

function romadd(itemElement) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent= 'x';
  itemElement.appendChild(deleteButton);
  deleteButton.addEventListener('click', ev =>{
    romList.removeChild(itemElement);
  });
  romList.appendChild(itemElement)
}

function haraadd(itemElement) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent= 'x';
  itemElement.appendChild(deleteButton);
  deleteButton.addEventListener('click', ev =>{
    harajukuList.removeChild(itemElement);
  });
  harajukuList.appendChild(itemElement)
}

function cyberadd(itemElement) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent= 'x';
  itemElement.appendChild(deleteButton);
  deleteButton.addEventListener('click', ev =>{
    cyberList.removeChild(itemElement);
  });
  cyberList.appendChild(itemElement)
}

function vintadd(itemElement) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent= 'x';
  itemElement.appendChild(deleteButton);
  deleteButton.addEventListener('click', ev =>{
    vintageList.removeChild(itemElement);
  });
  vintageList.appendChild(itemElement)
}

function allClear(){
  while (tradList.firstChild) {
    tradList.removeChild(tradList.firstChild);
  }
  while (romList.firstChild) {
  romList.removeChild(romList.firstChild);
  }
  while (harajukuList.firstChild) {
  harajukuList.removeChild(harajukuList.firstChild);
  }
  while (cyberList.firstChild) {
  cyberList.removeChild(cyberList.firstChild);
  }
  while (vintageList.firstChild) {
  vintageList.removeChild(vintageList.firstChild);
  }
}

function renderTradList(list) {
  list.forEach((listItem)=> addItem(listItem," ", "Trad Goth"));
}

function renderRomList(list) {
  list.forEach((listItem)=> addItem(listItem," ", "Romance Goth"));
}

function renderHaraList(list) {
  list.forEach((listItem)=> addItem(listItem," ", "Harajuku-inspired"));
}

function renderCyberList(list) {
  list.forEach((listItem)=> addItem(listItem," ", "Cybergoth"));
}

function renderVintList(list) {
  list.forEach((listItem)=> addItem(listItem," ", "Vintage Goth"));
}

menuToggle.addEventListener("click", toggleMenu);

submitButton.addEventListener("click", ev => {
  if(itemName.value){
    addItem(itemName.value, itemLink.value, gothType.value);
    itemName.value=null;
    itemLink.value=null;
  }
});

clearButton.addEventListener("click", allClear);

window.addEventListener('beforeunload', ev =>{

  const tradItems = [...tradList.childNodes];
  if(tradItems.length){
    const list = tradItems.map(item=> {
      return item.textContent.slice(0, -1);
    });
    localStorage.setItem('trad-list', list);
  } else{
    localStorage.removeItem('trad-list');
  }

  const romItems = [...romList.childNodes];
  if(romItems.length){
    const list = romItems.map(item=> {
      return item.textContent.slice(0, -1);
    });
    localStorage.setItem('rom-list', list);
  } else{
    localStorage.removeItem('rom-list');
  }

  const haraItems = [...harajukuList.childNodes];
  if(haraItems.length){
    const list = haraItems.map(item=> {
      return item.textContent.slice(0, -1);
    });
    localStorage.setItem('hara-list', list);
  } else{
    localStorage.removeItem('hara-list');
  }

  const cyberItems = [...cyberList.childNodes];
  if(cyberItems.length){
    const list = cyberItems.map(item=> {
      return item.textContent.slice(0, -1);
    });
    localStorage.setItem('cyber-list', list);
  } else{
    localStorage.removeItem('cyber-list');
  }

  const vintItems = [...vintageList.childNodes];
  if(vintItems.length){
    const list = vintItems.map(item=> {
      return item.textContent.slice(0, -1);
    });
    localStorage.setItem('vint-list', list);
  } else{
    localStorage.removeItem('vint-list');
  }
});

window.addEventListener('DOMContentLoaded', ev =>{

  const tradreload = localStorage.getItem('trad-list');
  console.log(tradreload);
  if(tradreload){
    renderTradList(tradreload.split(','));
  }

  const romreload = localStorage.getItem('rom-list');
  console.log(romreload);
  if(romreload){
    renderRomList(romreload.split(','));
  }

  const harareload = localStorage.getItem('hara-list');
  console.log(harareload);
  if(harareload){
    renderHaraList(harareload.split(','));
  }

  const cyberreload = localStorage.getItem('cyber-list');
  console.log(cyberreload);
  if(cyberreload){
    renderCyberList(cyberreload.split(','));
  }

  const vintreload = localStorage.getItem('vint-list');
  console.log(vintreload);
  if(vintreload){
    renderVintList(vintreload.split(','));
  }
});
