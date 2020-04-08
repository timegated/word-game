const elements = document.querySelector('.elements');
const elementsArray = Array.from(elements.children);


const styleChildElements = (arr) => {
    let transform;
    arr.forEach((item, index) => {
        if (index == 0) {
            transform = 210;
            item.style = `
            background: lightblue;
            border-radius: 9999px;
            color: white;
            height: 50px;
            position: absolute;
            top: 0px;
            transform: rotate(${transform}deg) translateX(-80px);
            width: 50px;`
        }
        else if (index == 1){
            transform = 330
            item.style = `
            background: lightblue;
            border-radius: 9999px;
            color: white;
            height: 50px;
            position: absolute;
            top: 0px;
            transform: rotate(${transform}deg) translateX(-80px);
            width: 50px;`
        }
        else if (index == 2) {
            transform = 270
            item.style = `
            background: lightblue;
            border-radius: 9999px;
            color: white;
            height: 50px;
            position: absolute;
            top: 0px;
            transform: rotate(${transform}deg) translateX(-80px);
            width: 50px;
            `
        }
    })
}

styleChildElements(elementsArray)

console.log(Array.from(elements.children))