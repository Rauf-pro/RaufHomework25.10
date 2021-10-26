
let slides = document.querySelector(".slider-items").children;
let leftSide = document.querySelector(".left_row");
let rightSide = document.querySelector(".right_row");
let allSlides = slides.length;
let index=0;

rightSide.onclick = function(){
    next ("next");

}

leftSide.onclick = function(){
    next("prev")
}
function next(direction){
    if (direction == "next") {
        index++;
        if (index == allSlides) {
            index=0;
        }
    }
    else{
        if (index==0) {
            index = allSlides -1;
        }else{
            index--;
        }
    }

    for (let i = 0; i < slides.lengt; i++) {
        slides[i].classList.remove("active");
        
    }
    slides[index].classList.add("active");
}


// let slideShow = document.querySelector(".slide_show");
// let leftArrow = document.querySelector("left_arrow");
// let rightArrow = document.querySelector("right_arrow");

// rightArrow.addEventListener("click", function() {
    

// })

