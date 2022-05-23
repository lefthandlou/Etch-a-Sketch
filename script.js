
const sketchContainer = document.querySelector('.sketchContainer'); 

//Prompt user to input number for size of grid 
// and limit to 100 or less to prevent crashing

function pickNumber() {
    let userInput=window.prompt('input a number');  
    if (userInput >= 100) {
        window.alert('Please input a number less than 100');
        let userInput=window.prompt('input a number');  
        return userInput;
    } else if (userInput <= 100) {
        return userInput;  
        
    };          
}

//For loop creates new divs per user specification, squared
function newDiv() {
    let userInput = pickNumber();
    let gridSize = (userInput)*(userInput);
    for (let i=0; i<gridSize; i++) {
        let newContainer = document.createElement('div');
        newContainer.classList.add('divs');
        sketchContainer.append(newContainer); 
        let cellSize = ((1000/userInput)-1);
        let cellSizeString=(cellSize.toString() + 'px');
        newContainer.style.height = (cellSizeString);
        newContainer.style.width = (cellSizeString);
    }; 
}

function colorCells() {
    let makeDiv = newDiv();
    const sketchCells = document.querySelectorAll('.divs'); 
    console.log(sketchCells);
    sketchCells.forEach(cell => {
        cell.addEventListener('mouseout', function handleHover(event) {
            let cellColor=backgroundColor();
            cell.style.backgroundColor = (cellColor);
        });
    });
}

//TODO tie background color mode to buttons
//TODO grayscale color mode
//TODO all-black color mode
//Randomly select color from selection to put as div background
function backgroundColor(){
    let colorSelections = ['#7401b8', '#692fc3', '#5e60ce', '#5390d9', '#4fa8de', 
    '#55cfe1', '#72efdd'];
    let pickColor = colorSelections[Math.floor(Math.random()
        *colorSelections.length)];
    let stringColor = pickColor.toString();
    return stringColor;
}

//TODO rearrage so grid size prompt window pops up when reset button is clicked
//and get rid of 'click me' grid sizer button

//event listener to hook user input and new div creation to button click
function windowPrompt() {
    let gridButton = document.querySelector('.setGrid');
    gridButton.addEventListener('click', function handleclick(event){
       colorCells();
       gridButton.disabled=true;
    }); 
} 

//event listener to refresh page on click
function reloadPage() {
    let resetButton=document.querySelector('.reset');
    resetButton.addEventListener('click', () => location.reload());
	windowPrompt();	 
}

console.log(reloadPage());
