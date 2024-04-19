//imports
import image2 from '../assets/images/mapleSprouts.png';

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
    if(image_2 && image_2.style) {
        image_2.style.height = '450px';
        image_2.style.width = '550px';
    }
    element.appendChild(image_2);
    element.dataset.tabIndex = 1;
    return element;     
}
