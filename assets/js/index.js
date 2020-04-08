const elements = document.querySelector('.elements');
const trigger = document.querySelector('.trigger-element');
const elementsArray = Array.from(elements.children);


const styleChildElements = (arr) => {
    let transform;
    let top;
    arr.forEach((item, index) => {
        if (index == 0) {
            transform = 0;
            item.style = `
            transform: rotate(${transform}deg) translateX(-80px);
            display:block;
            top: 100px`
            
        }
        else if (index == 1) {
            transform = 180
            item.style = `
            transform: rotate(${transform}deg) translateX(-80px);
            display:block;
            top: 100px;
        `
        }
        else if (index == 2) {
            transform = 270
            item.style = `
           
            transform: rotate(${transform}deg) translateX(-80px);
            display: block; 
            top: 100px;
            `
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