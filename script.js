
const sketchContainer = document.querySelector('.sketchContainer'); 

//Prompt user to input number
function pickNumber() {
    let userInput=window.prompt('input a number');            
    return userInput;  
}

//Use for loop to create as many new divs as user specifies in prompt
//TODO - make grid a block, with no orphans

function newDiv() {
    let userInput=pickNumber();
    let gridSize = (userInput)*(userInput);
    for (let i=0; i<gridSize; i++) {
        let newContainer = document.createElement('div');
        newContainer.classList.add('divs');
        sketchContainer.append(newContainer);
        newContainer.style.border = '1px solid #80ffdb';
        newContainer.style.width = '100px';
        newContainer.style.height = '100px'; 
    }; 
    const sketchCells = document.querySelectorAll('.divs'); 
    //console.log(sketchCells);
    return sketchCells;
}


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

//TODO set color schemes for drawing mode

//TODO make nodelist from newContainer for use in drawing function


//Working mouseout for main sketchpad container below
/*sketchContainer.addEventListener('mouseout' , function changeColor(event) {
    sketchContainer.classList.add('color');
})*/


/*TODO Function hoverListener () {
    foreach addEventListener('mouseout') in all of new divs created; mouseout by user
    changes class name for new CSS styling for the color in that div to either a set color or a 
    rainbow gradient. If re-hovered, do not change again.
}*/



console.log(reloadPage());
