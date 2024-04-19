import './style.css';
import {head_name} from './functions.js';

import {sideBarText_home,image1_component} from './home.js';
import {sideBarText_menu,image2_component} from './menu.js';
import {sideBarText_about,image3_component} from './about.js';


//set the Restaurant name
document.querySelector('#headName').appendChild(head_name());

const contentTabsList = document.querySelector('.tabs-content');
//console.log(`at 11: ${contentTabsList}`);
contentTabsList.appendChild(image1_component());
contentTabsList.appendChild(image2_component());
contentTabsList.appendChild(image3_component());
//console.log(`at 15: ${contentTabsList}`);


const sideBarTabsList = document.querySelector('.tabs-sidebar');
//console.log(`at 17: ${sideBarTabsList}`);
sideBarTabsList.appendChild(sideBarText_home());
sideBarTabsList.appendChild(sideBarText_menu());
sideBarTabsList.appendChild(sideBarText_about());
//console.log(`at 22: ${sideBarTabsList}`);

let tabIndex = 0; //default
const buttonContainer = document.querySelector("nav");

// Converting HTML collection to array
const buttons = [...buttonContainer.children];

//find default tab button and tab index
let defaultTabIndex = -1;
buttons.forEach(findDefault);

function findDefault(item, index, arr){
 //console.log(`index: ${index}, item: ${arr[index]} buttonNumber: ${arr[index].dataset.num}`);
 if(arr[index].classList.contains('default-tab')) { 
    defaultTabIndex = index;
    buttons[defaultTabIndex].classList.add('active');
  }
}
//console.log(`defaultTabIndex = ${defaultTabIndex}`);

// Selecting sideBar and content containers
const sidebarContainer = document.querySelector('.tabs-sidebar');
//console.log(`sidebarContainer: ${JSON.stringify(sidebarContainer)}`);
const contentContainer = document.querySelector('.tabs-content');
//console.log(`contentContainer: ${JSON.stringify(contentContainer)}`);
// Converting HTML collections to arrays
/*
const tabSidebar = [...sidebarContainer.children];
const tabContents = [...contentContainer.children];
*/
const tabSidebar = [...sideBarTabsList.children];
const tabContents = [...contentTabsList.children];

//console.log(`tabSidebar: ${tabSidebar}`);
//console.log(`tabContents: ${tabContents}`);

//prevent display if not default

tabIndex = defaultTabIndex;
//console.log(`tabIndex: ${tabIndex}`);

/*
//sidebar
tabSidebar.forEach(showCurrentSidebar);

function showCurrentSidebar(item, index, arr) {
  arr[index].style['display'] = 'none';
  //console.log(`at func sidebar, index ${index}, tabIndex: ${tabIndex}`);
  if(index === tabIndex){
    arr[index].style['display'] = 'grid';
    console.log(`arr: ${arr}, arr[${index}].style: ${arr[index].style}`);
  }
}
*/

//content
tabContents.forEach(showCurrentContent);

function showCurrentContent(item, index, arr){
  arr[index].style['display'] = 'none';
  //console.log(`at func content tabIndex: ${tabIndex}`);
  if(index === tabIndex){
    arr[index].style['display'] = 'grid';
    //console.log(`arr: ${arr}, arr[${index}].style: ${arr[index].style}`);
  }
}

//sideBar
tabSidebar.forEach(showCurrentSidebar);

function showCurrentSidebar(item, index, arr) {
    item.style.display = 'none';
    if(index === tabIndex){
      item.style.display= 'grid';
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
      tabIndex = 0;
      break
  }
  //clear indication of active button
  buttons.forEach( (item, index, arr) =>{
    buttons[index].classList.remove('active');
  });
  //indicate active button
  buttons[tabIndex].classList.add('active');

  //update display
  console.log(`btn event tabIndex: ${tabIndex}`);
  tabSidebar.forEach(showCurrentSidebar);
  tabContents.forEach(showCurrentContent);
  
});
