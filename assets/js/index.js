const elements = document.querySelector('.elements');
const trigger = document.querySelector('.trigger-element');
const elementsArray = Array.from(elements.children);


const styleChildElements = (arr) => {
    let transform;
    arr.forEach((item, index) => {
        if (index == 0) {
            item.classList.add('animate-nav-one');
            transform = 0;
            item.style = `
            transform: rotate(${transform}deg) translateX(-120px);
            display:block;
            top: 0px
            `;
            
        }
        else if (index == 1) {
            item.classList.add('animate-nav-two');
            transform = 180;
            item.style = `
            transform: rotate(${transform}deg) translateX(-120px);
            display:block;
            top: 0px`;
        }
        else if (index == 2) {
            item.classList.add('animate-nav-three');
            transform = 270;
            item.style = `
            transform: rotate(${transform}deg) translateX(-120px);
            display: block; 
            top: 0px;`;
        }
    });
};
const triggerNavAnimation = (e) => {
    console.log(e.type);
    e.preventDefault();
    
    styleChildElements(elementsArray)
    
};

trigger.addEventListener('click', triggerNavAnimation)
// styleChildElements(elementsArray)

console.log(trigger)