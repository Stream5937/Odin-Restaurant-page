import './style.css';
import {head_name,sideBarText_home,sideBarText_menu,sideBarText_about,image1_component,image2_component,      image3_component} from './functions.js';

//set the Restaurant name
document.querySelector('#headName').appendChild(head_name());

const contentTabsList = document.querySelector('.tabs-content');
contentTabsList.appendChild(image1_component());
contentTabsList.appendChild(image2_component());
contentTabsList.appendChild(image3_component());

const sideBarTabsList = document.querySelector('.tabs-sidebar');
sideBarTabsList.appendChild(sideBarText_home());
sideBarTabsList.appendChild(sideBarText_menu());
sideBarTabsList.appendChild(sideBarText_about());

let tabIndex = 0; //default
const buttonContainer = document.querySelector("nav");



// Converting HTML collection to array
const buttons = [...buttonContainer.children];

//find default tab button and tab index
let defaultTabIndex = -1;
buttons.forEach(findDefault);
function findDefault(item, index, arr){
 console.log(`index: ${index}, item: ${arr[index]} buttonNumber: ${arr[index].dataset.num}`);
 if(arr[index].classList.contains('default-tab')) { defaultTabIndex = index;}
}
console.log(`defaultTabIndex = ${defaultTabIndex}`);

// Selecting sideBar and content containers
const sidebarContainer = document.querySelector('.tabs-sidebar');
const contentContainer = document.querySelector('.tabs-content');

// Converting HTML collections to arrays
const tabSidebar = [...sidebarContainer.children];
const tabContents = [...contentContainer.children];


//prevent display if not default
tabIndex = defaultTabIndex;
//sidebar
tabSidebar.forEach(showCurrentSidebar);

function showCurrentSidebar(item, index, arr) {
  arr[index].style['display'] = 'none';
  console.log(`at func sidebar tabIndex: ${tabIndex}`);
  if(index === tabIndex){
    arr[index].style['display'] = 'grid';
    console.log(`arr: ${arr}, arr[${index}].style: ${arr[index].style}`);
  }
}

//content
tabContents.forEach(showCurrentContent);

function showCurrentContent(item, index, arr){
  arr[index].style['display'] = 'none';
  console.log(`at func content tabIndex: ${tabIndex}`);
  if(index === tabIndex){
    arr[index].style['display'] = 'grid';
    console.log(`arr: ${arr}, arr[${index}].style: ${arr[index].style}`);
  }
}

//button event listener(s)

buttonContainer.addEventListener ("click", function(event) {
  let e = event.target.closest('button');
  if (!e) return;
  console.log('button '+e.id +" data-num: "+ e.dataset.num);
  switch(parseInt(e.dataset.num)) {
    case 0:
      tabIndex = 0;
      break;
    case 1:
      tabIndex = 1;
      break;
    case 2:
      tabIndex = 2;
      break;
    default:
      //tabIndex = 0;
      break
  }
  //update display
  console.log(`btn event tabIndex: ${tabIndex}`);
  tabSidebar.forEach(showCurrentSidebar);
  tabContents.forEach(showCurrentContent);
});
