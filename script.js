let userInput=window.prompt('input a number');

function newDiv() {
    for (let i=0; i<userInput; i++) {
    const newContainer = document.createElement('div');
    newContainer.classList.add('divs');
    const contOne = document.querySelector('.containerOne');
    contOne.append(newContainer);
    newContainer.style.border = '1px solid black';
    newContainer.style.width = '100px';
    newContainer.style.height = '100px';
    };
}

console.log(newDiv());