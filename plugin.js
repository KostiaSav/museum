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

const menuLinks = document.querySelectorAll('.container li a[data-goto]')

if(menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    });

    function onMenuLinkClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            console.log(gotoBlockValue);

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            })

            e.preventDefault();
        }
    }
}