
// --------------  MOVED TO SEPARATE MODULES -----------------------------------------
//imports
//import image1 from '../assets/images/garlicBread.png';
//import image2 from '../assets/images/mapleSprouts.png';
//import image3 from '../assets/images/potatoSalad.png';

//text --------------------------------------------------------------------------------
//restaurant name
export const head_name = () => {
    const element = document.createElement('h1');
    element.innerText="Occasions";
    element.classList.add("rest_Name");
    return element;
}

/* -------------  MOVED TO SEPARATE MODULES --------------------------------------------
//home tab -----------------------------------------------------------------------------

//sidebar text home page version
export const sideBarText_home = () => {
    const listItem = document.createElement('li');
    const heading = document.createElement('h3');
    heading.innerText="Sumptuous dining, relaxed environment, excellent service";
    listItem.appendChild(heading);
    listItem.classList.add("sideText_home");
    listItem.classList.add("tab");
    listItem.dataset.tabIndex = 0;
    return listItem;
}

// image
//homepage image image_1
export const image1_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_1 = new Image();
    image_1.src = image1;
    element.appendChild(image_1);
    element.dataset.tabIndex = 0;
    return element;     
}

//menu tab -----------------------------------------------------------------------------

//sidebar text menu page version
export const sideBarText_menu = () => {
    const listItem = document.createElement('li');
    const heading = document.createElement('h3');
    heading.innerText="Menu text";
    listItem.appendChild(heading);
    listItem.classList.add("sideText_menu");
    listItem.classList.add("tab");
    listItem.dataset.tabIndex = 1;
    return listItem;
}

// image
// menupage image image_2
export const image2_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_2 = new Image();
    image_2.src = image2;
    element.appendChild(image_2);
    element.dataset.tabIndex = 1;
    return element;     
}


//about tab -----------------------------------------------------------------------------

//sidebar text about page version
export const sideBarText_about = () => {
    const listItem = document.createElement('li');
    const heading = document.createElement('h3');
    heading.innerText="About text";
    listItem.appendChild(heading);
    listItem.classList.add("sideText_about");
    listItem.classList.add("tab");
    listItem.dataset.tabIndex = 2;
    return listItem;
}

// image
// aboutpage image image_3
export const image3_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_3 = new Image();
    image_3.src = image3;
    element.appendChild(image_3);
    element.dataset.tabIndex = 2;
    return element;     
}

//------------------------------------------------------------------------------------  */
