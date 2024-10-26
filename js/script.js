var folder = "/Origami/imgs/gallery/";
let galleryArray = [];
let count = 0;
let grid = document.querySelector('.grid');

for(let i = 0; i < 36; i++){
    galleryArray.push(folder + (i + 1) + "_cover.png");
}

LoadGallery();

function LoadGallery(){
    console.log("Loading gallery images");
    document.querySelectorAll(".grid-block").forEach(function(block) {
        block.style.backgroundImage = "url(" + galleryArray[count] + ")";
        count++;
    });
    console.log("Success.");
}

