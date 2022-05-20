
const sketchContainer = document.querySelector('.sketchContainer'); 

//Prompt user to input number
function pickNumber() {
    let userInput=window.prompt('input a number');            
    return userInput;  
}

//Use for loop to create as many new divs as user specifies in prompt
//TODO - make grid a block, with no orphans

function newDiv() {
    let userInput = pickNumber();
    let gridSize = (userInput)*(userInput);
    for (let i=0; i<gridSize; i++) {
        let newContainer = document.createElement('div');
        newContainer.classList.add('divs');
        sketchContainer.append(newContainer); 
    }; 
    const sketchCells = document.querySelectorAll('.divs'); 
    console.log(sketchCells);
    sketchCells.forEach(cell => {
        cell.addEventListener('mouseout', function handleHover(event) {
            cell.classList.add('color');
        });
    });
}

//TODO rearrage so grid size prompt window pops up when reset button is clicked
//and get rid of 'click me' grid sizer button

//event listener to hook user input and new div creation to button click
function windowPrompt() {
    let gridButton = document.querySelector('.setGrid');
    gridButton.addEventListener('click', function handleclick(event){
       newDiv();
       gridButton.disabled=true;
    }); 
} 

//event listener to refresh page on click
function reloadPage() {
    let resetButton=document.querySelector('.reset');
    resetButton.addEventListener('click', () => location.reload());
	windowPrompt();	 
}

//TODO set color schemes for drawing mode, one monochrome and one 'rainbow'


console.log(reloadPage());
