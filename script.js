const pipe = document.querySelector(".pipe");
const mario = document.querySelector(".mario");
let loop;
let isJumping = false; // Adicionado para controlar se o Mario está pulando

const jump = () => {
    if (!isJumping) {
        isJumping = true;

        mario.classList.add("jump");

        setTimeout(() => {
            mario.classList.remove("jump");
            isJumping = false; // Atualiza o status de pulo quando o pulo termina
        }, 500);
    }
};

document.addEventListener("keydown", jump);

const checkCollision = () => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).left.replace("px", "");
    const marioBottom = +window.getComputedStyle(mario).bottom.replace("px", "");
    const pipeTop = +window.getComputedStyle(pipe).top.replace("px", "");
    const pipeWidth = +window.getComputedStyle(pipe).width.replace("px", "");
    const marioWidth = +window.getComputedStyle(mario).width.replace("px", "");


    if (
        !isJumping &&
        marioBottom <= pipeTop &&
        marioBottom +80<= pipeTop && // Considere a altura total do Mario após o pulo
        marioPosition + marioWidth >= pipePosition &&
        marioPosition <= pipePosition + pipeWidth
    ) {
        pipe.style.left = `${pipePosition}px`;


        mario.style.animation = "none";

        mario.style.left = `${marioPosition}px`;
        


        mario.src = "Imagens/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "55px";

       clearInterval(loop);
    }

    requestAnimationFrame(checkCollision);
}

// Iniciar a verificação de colisão
requestAnimationFrame(checkCollision);

