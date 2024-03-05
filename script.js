const pipe = document.querySelector(".pipe");
const mario = document.querySelector(".mario");

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
}

const checkCollision = () => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    const pipeHeight = 50;

    if (pipePosition <=  350 && pipePosition >250  &&  marioPosition < 350) {
        pipe.style.animation = "none";

        pipe.style.left = `${pipePosition}px`;


        mario.style.animation = "none";

        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = "Imagens/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "55px";

       clearInterval(loop);
    }

    requestAnimationFrame(checkCollision);
}

// Iniciar a verificação de colisão
requestAnimationFrame(checkCollision);

document.addEventListener("keydown", jump);