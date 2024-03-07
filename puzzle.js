var rows = 3;
var cols=3;
var currtile;
var othertile; //blank tile
var turns = 0;
var imgorder =["1", "2", "3", "4" ,"5", "6","7","8","9"];
var imgorder =["4", "2", "8", "5" ,"1", "6","7","9","3"];

window.onload = function(){ // for populating images
    for(let r=0; r<rows;r++){
        for(let c=0; c<cols; c++){
            
            let tile = document.createElement("img");
            tile.id = r.toString ()+ "_" +c.toString();   // <img id=0_0>
            tile.src= imgorder.shift() + ".jpg";
            // Drag functionality
            tile.addEventListener("dragstart", dragStart);  // click an image to drag
            tile.addEventListener("dragover" , dragOver);   // moving image around while clicked
            tile.addEventListener("dragenter" , dragEnter); //Dragging image onto another one

            tile.addEventListener("dragleave" , dragLeave); // dragged image leaving another image
        
            tile.addEventListener("drop" , dragDrop);  // drag image over another image , drop the image
            tile.addEventListener("dragend" , dragEnd);  // after drag drop , swap two tiles


            document.getElementById("board").append(tile);
            


        }
    }
}
function dragStart(){
    currtile = this;
}
function dragOver(e){
    e.preventDefault();

}
function dragEnter(){
    e.preventDefault();
}
function dragLeave(){
    
}
function dragDrop(){
    othertile = this; // this refer to img tile being dropped on;
}
function dragEnd(){
    if(!othertile.src.includes("3.jpg")){
       return;
    }
    let currcoords = currtile.id.split("_");
    let r = parseInt(currcoords[0]);
    let c = parseInt(currcoords[1]);
    let othercoords = othertile.id.split("_");
    let r2= parseInt(othercoords[0]);
    let c2 = parseInt(othercoords[1]);
    let moveleft =  r==r2   && c2==c-1;
    let moveright = r==r2 && c2 == c+1;
    let moveup = c==c2 && r2 == r-1;
    let movedown = c==c2 && r2==r+1;
    let isAdjacent = moveleft || moveright || moveup || movedown;

    if(isAdjacent){
    let currimg = currtile.src; // swapping images
    let otherimg= othertile.src;
    
    currtile.src = otherimg;
    othertile.src = currimg; 
    turns +=1;
    document.getElementById("turns").innerText = turns;
    }

}


