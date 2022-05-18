let resetButton = document.querySelector('.reset');


//Prompt user to input number
function pickNumber() {
    let userInput=window.prompt('input a number');            
    return userInput;  
}

//Use for loop to create as many new divs as user specifies in prompt
//TODO - take user input and make grid, not just total number
function newDiv() {
    let userInput=pickNumber();
    for (let i=0; i<userInput; i++) {
        const newContainer = document.createElement('div');
        const sketchContainer = document.querySelector('.sketchContainer'); 
        newContainer.classList.add('divs');
        sketchContainer.append(newContainer);
        newContainer.style.border = '1px solid #80ffdb';
        newContainer.style.width = '100px';
        newContainer.style.height = '100px';
    };
}

//event listener to hook user input and new div creation to button click
function windowPrompt() {
    resetButton.addEventListener('click', function handleclick(event){
       newDiv();
    }); 
} 



/*Function hoverListener () {
    When any of the divs created above are hovered (mouse in mouse out?) over by user
    change class name for new CSS styling for the color in that div to either a set color or a 
    rainbow gradient. If re-hovered, do not change again.
}

Function resetSketch () {
    Click 'reset' button to clear away sketch and grid 
    and re-prompt user to set grid size/color setting.
}

*/

console.log(windowPrompt());