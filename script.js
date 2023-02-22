let menuVisible = false;
//Function that hides or shows the menu
function showMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function select(){
    //after an item is selected, hide the menu
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Function that applies the animations to the progress level of the skills

function effectSkills(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progress");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("python");
        habilidades[2].classList.add("c");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("react");
        habilidades[5].classList.add("htmlcss");
        habilidades[6].classList.add("aws");
        habilidades[7].classList.add("node");
        habilidades[8].classList.add("linux");
        habilidades[9].classList.add("agile");
        habilidades[10].classList.add("jenkins");
        habilidades[11].classList.add("postman");
    }
}


//detect scrolling to apply skill bar animation
window.onscroll = function(){
    effectSkills();
} 