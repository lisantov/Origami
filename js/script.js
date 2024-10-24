var folder = "/imgs/gallery/";
let galleryArray = [];

for(let i = 0; i < 6; i++){
    galleryArray.push(folder + (i + 1) + "_cover.png");
}

LoadGallery();

function LoadGallery(){
    let i = 0;
    console.log("Loading gallery images");
    document.querySelectorAll(".grid-block").forEach(function(block) {
        block.style.backgroundImage = "url("+ "Origami" + galleryArray[i] + ")";
        i++;
    });
    console.log("Success.");
}

