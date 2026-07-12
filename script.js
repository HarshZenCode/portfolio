let text = [
    "Java Full Stack Developer",
    
];


let index = 0;
let charIndex = 0;

let typing = document.getElementById("typing");
if (typing) {
    type();
}


function type(){

    if(charIndex < text[index].length){

        typing.innerHTML += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }
    else{

        setTimeout(erase,1500);

    }

}



function erase(){

    if(charIndex > 0){

        typing.innerHTML = text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }
    else{

        index++;

        if(index >= text.length){

            index=0;

        }

        setTimeout(type,500);

    }

}


type();
// Scroll Reveal

const reveals = document.querySelectorAll(
".reveal-left, .reveal-right, .reveal-bottom"
);

function revealElements(){

    reveals.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();
// Scroll Progress Bar

window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

});
window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    const bar = document.getElementById("progress-bar");

    if(bar){
        bar.style.width = progress + "%";
    }

});
const cards = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>observer.observe(card));
const links = document.querySelectorAll(".navlist a");

links.forEach(link=>{

    if(link.href===window.location.href){
        link.classList.add("active");
    }

});