const pipe = document.querySelector(".pipe");
const mario = document.querySelector(".mario");


const jump = () => {
    mario.classList.add("jump");


    setTimeout(() => {

        mario.classList.remove("jump");

    }, 500);   
}

    
const loop = setInterval(() => {
console.log("loop")

const pipePosition = pipe.offleft;
const marioPosition = +window.getComputedStyle(mario). bottom.replace("px, ");

console.log(marioPosition)

if (pipePosition <= 1950 && pipePosition > 0 && marioPosition < 1950) {

pipe.style.animation = "none";
pipe.style.left= `${pipePosition}px`;
 
mario.style.animation = "none";
mario.style.bottom = `${marioPosition}px`;


mario.src = "/imagem/game-over.png";
mario.style.width = "75px"
mario.style.marginleft = "60px"

clearInterval(loop);
}

}, 10); 


document.addEventListener("keydown" , jump);  

