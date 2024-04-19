//imports
import image1 from '../assets/images/garlicBread.png';

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
    if(image_1 && image_1.style) {
        image_1.style.height = '450px';
        image_1.style.width = '550px';
    }
    element.appendChild(image_1);
    element.dataset.tabIndex = 0;
    //element.style.width = '300px';
    //element.style.height = 'auto';
    
    return element;     
}
