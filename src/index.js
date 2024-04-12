import image1 from '../assets/images/garlicBread.png';
import './style.css';


function head_name() {
    const element = document.createElement('h1');
    element.innerText="Occasions";
    element.classList.add("restName");
    return element;
}

document.querySelector('#headName').appendChild(head_name());

function sideBarText() {
    const element = document.createElement('h3');
    element.innerText="Sumptuous dining, relaxed environment, excellent service";
    element.classList.add("sideText_1");
    return element;
}

document.querySelector('.sideBar').appendChild(sideBarText());


function image1_component() {
    const element = document.createElement('div');

    // Add the image to our existing <div>.
    const image_1 = new Image();
    image_1.src = image1;
    element.appendChild(image_1);

    return element;
}

document.querySelector('#content').appendChild(image1_component());
