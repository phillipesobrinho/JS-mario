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

    if (pipePosition <= 460 && pipePosition > 0 && marioPosition < 10) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = "/Imagens/game-over.png";
        mario.style.width = "95px";
        mario.style.marginLeft = "55px";

        clearInterval(loop);
    }

    requestAnimationFrame(checkCollision);
}

// Iniciar a verificação de colisão
requestAnimationFrame(checkCollision);

document.addEventListener("keydown", jump);