var folder = "../imgs/gallery/";
let galleryArray = [];

for(let i = 0; i < 6; i++){
    galleryArray.push(folder + (i + 1) + "_cover.png");
}

LoadGallery();

function LoadGallery(){
    let i = 0;
    try {
        console.log("Trying local directory");
        document.querySelectorAll(".grid-block").forEach(function(block) {
            block.style.backgroundImage = "url(" + galleryArray[i] + ")";
            i++;
        });
    } catch(err){
        console.log("Failed. Trying Github directory");
        i = 0;
        document.querySelectorAll(".grid-block").forEach(function(block) {
            block.style.backgroundImage = "url(lisantov.github.io/Origami/" + galleryArray[i].substring(3) + ")";
            i++;
        });
    }
    console.log("Success.");
}

