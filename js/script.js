var folder = "/Origami/imgs/gallery/";
let galleryArray = [];
let i = 0;
let loadIterations = 0;

for(let i = 0; i < 36; i++){
    galleryArray.push(folder + (i + 1) + "_cover.png");
}

LoadGallery();

function LoadGallery(){
    console.log("Loading gallery images");
    document.querySelectorAll(".grid-block").forEach(function(block) {
        block.style.backgroundImage = "url(" + galleryArray[i] + ")";
        i++;
    });
    console.log("Success.");
}

