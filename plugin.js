document.querySelector(".burger_menu").addEventListener('click', burgerMenu);

function burgerMenu(){
    document.querySelector(".container").classList.toggle('active');
    document.querySelector(".burger_menu").classList.toggle('active');
}

let scenes = document.querySelectorAll(".scenes div");
let loupe = document.querySelectorAll(".loupe_scene");

// scenes[0].addEventListener('mouseover', scenesMouseOver(0));
// scenes[0].addEventListener('mouseout', scenesMouseOut(0));

function scenesMouseOver(numbers){
    loupe[numbers].style.opacity = 1;
}

function scenesMouseOut(numbers){
    loupe[numbers].style.opacity = 0;
}