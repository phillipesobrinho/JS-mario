const pipe = document.querySelector(".pipe");
const mario = document.querySelector(".mario");

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
}
document.addEventListener("keydown", jump);

const checkCollision = () => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).left.replace("px", "");



    if (pipePosition <=  250 && pipePosition  > 250 &&  marioPosition < 130) {
        pipe.style.animation = "none";
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

