
let numDiv=16;
let colorPicker=document.getElementById("head");
let colorValue=colorPicker.value;
let btEraser=document.querySelector(".buttonEraser");
let btColor=document.querySelector(".buttonColor");
let btRainbow=document.querySelector(".buttonRainbow");
let btClear=document.querySelector(".buttonClear");
let rangeSlider=document.getElementById("myRange");
let container=document.querySelector(".container");
let divContainer=document.getElementById("divContainer");
let colorMode=document.querySelector(".buttonColor");
let btns=document.querySelectorAll("button");
let selectMode='color';
let mouseDown='false'

createDiv();
button();
buttonListener();
colorPickerListener();


document.body.addEventListener("mousedown", function(){
    mouseDown='true';})

document.body.addEventListener("mouseup", function(){
    mouseDown='false';})


// listeners for buttons
function buttonListener() {
btColor.addEventListener("click", function(){
    colorValue=colorPicker.value;
    drawDiv(colorValue);
    selectMode='color';})

btRainbow.addEventListener("click", function(){
    rainbowDiv();
    selectMode='rainbow';})

btEraser.addEventListener("click", function(){
    colorValue="#EEF0F2";
    drawDiv(colorValue);
    selectMode='eraser';})

btClear.addEventListener("click", function(){
    createDiv();
    drawDiv(colorValue);
    selectMode='clear';})
};

// listeners for color picker
function colorPickerListener(){
    colorPicker.addEventListener("input",(event)=>{
        colorValue=colorPicker.value;
        btColor.classList.add('selected')
        drawDiv(colorValue);
        if(document.querySelector('button.selected')){
            document.querySelector('button.selected').classList.remove('selected');
            }
    })    
}

// listener for slider
rangeSlider.onmouseup= function(){
    createDiv();
    if(selectMode=='color'){
        drawDiv(colorValue);
    }
    else if(selectMode=='rainbow'){
        rainbowDiv();}
   }


// function to add grid template columns to div container
function containerGrid (numDiv){
    for (let i=0;i<(numDiv);i++){
            divContainer.style.gridTemplateColumns+=" auto"
        }
    }


// function to add div item to div container

function createDiv(){

    numDiv=document.getElementById("myRange").value;
    document.getElementById("divContainer").style.gridTemplateColumns="";
    document.getElementById("divContainer").innerHTML=""

   containerGrid(numDiv);

    for (let i=0;i<(Math.pow(numDiv,2));i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("div-item");
        document.getElementById("divContainer").appendChild(newDiv);

    }
}

//style button when selected
function colorButton() {
    const buttons=document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", function(){
            button.style.backgroundColor="black";
            button.style.color='white';
        })
    })
}

// function to control selected button
function button(){
    btns.forEach((btn)=> {
        btn.addEventListener('click', function() {
            if(document.querySelector('button.selected')){
            document.querySelector('button.selected').classList.remove('selected');
            }
            btn.classList.add('selected');
        });
    });
}

// function to draw on canvas when mouse down and mouse hover with selected color on color picker
function drawDiv(colorValue){


        const divItem=document.querySelectorAll(".div-item");
        divItem.forEach((div) => {
                div.addEventListener("mousedown", function(){
                    div.style.backgroundColor=`${colorValue}`;
                })
                div.addEventListener("mouseover", function(){
                    if(mouseDown=='true'){
                        div.style.backgroundColor=`${colorValue}`;
                    }
                })
            })
    };

// function to draw on canvas when mouse down and mouse hover with random color
function rainbowDiv(){
    function randomColor() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        return bgColor;
        }
    
    const divItem=document.querySelectorAll(".div-item");
    divItem.forEach((div) => {
        div.addEventListener("mousedown", function(){
            div.style.backgroundColor=randomColor();
        })
            div.addEventListener("mouseover", function(){
                if(mouseDown=='true'){
                    div.style.backgroundColor=randomColor();
                }
        })
        
    })
}


