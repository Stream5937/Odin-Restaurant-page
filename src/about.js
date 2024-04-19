//imports
import image3 from '../assets/images/potatoSalad.png';

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
    if(image_3 && image_3.style) {
        image_3.style.height = '450px';
        image_3.style.width = '550px';
    }
    element.appendChild(image_3);
    element.dataset.tabIndex = 2;
    return element;     
}