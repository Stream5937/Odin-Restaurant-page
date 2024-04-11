//import image1 from '../assets/images/garlicBread.png';

import image1 from './garlicBread.png';

console.log("Logging:");

function image1_component() {
    const element = document.createElement('div');

    // Add the image to our existing <div>.
    const image_1 = new Image();
    image_1.src = image1;
    element.appendChild(image_1);

    return element;
}

document.body.appendChild(image1_component());

//document.querySelector('#content').appendChild(image1_component());
