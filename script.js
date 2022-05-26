//Limit user input to 100
function pickNumber() {
    let userInput=window.prompt('input a number');  
    if (userInput > 100) {
        window.alert('Please input a number less than 100');
        let userInput=window.prompt('input a number');  
        return userInput;
    } else if (userInput <= 100) {
        return userInput;  
    };          
}

//Squares off and evenly sets height/width for new divs
//TODO separate concerns
function newDiv() {
    let userInput = pickNumber();
    const sketchContainer = document.querySelector('.sketchContainer'); 
    let gridSize = (userInput)*(userInput);
    for (let i=0; i<gridSize; i++) {
        let newContainer = document.createElement('div');
        newContainer.classList.add('divs');
        sketchContainer.append(newContainer); 
        let cellSize = ((700/userInput)-1);
        let cellSizeString=(cellSize.toString() + 'px');
        newContainer.style.height = (cellSizeString);
        newContainer.style.width = (cellSizeString);
    }; 
}


//Randomly select color from array to put as div background
function rainbowBackground(){
    let colorSelections = ['#7401b8', '#692fc3', '#5e60ce', '#5390d9', '#4fa8de', 
        '#55cfe1', '#72efdd'];
    let pickColor = colorSelections[Math.floor(Math.random()
        *colorSelections.length)];
    let stringColor = pickColor.toString();
    return stringColor;
}

//Calls newDiv function to access the nodelist to iterate over cells and add color
//TODO limit eventlistener to one event or remove after event so coloring
// over doesn't happen
function colorCells() {
    let makeDiv = newDiv();
    const sketchCells = document.querySelectorAll('.divs'); 
    sketchCells.forEach(cell => {
        cell.addEventListener('mouseover', function handleHover(event) {
            let cellColor=rainbowBackground();
            cell.style.backgroundColor = (cellColor);
        });
    });
}

//TODO make initial grid colorable
//event listener to hook user input, new div creation,
//and cell color to button click
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
