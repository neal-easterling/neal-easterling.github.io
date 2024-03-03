import { ParticleController } from "./classes/ParticleController.js";
console.log('main.js connected');

window.onload = ()=>{
    const container = document.querySelector('.particleContainer');
    if(container){
        const handler = new ParticleController(container);
        const runLoop = () => {
            handler.createRandomParticle();
            handler.checkPositions();
        }

        setInterval(runLoop, 1500);
    }
}


const navButton = document.getElementById('ne-nav-icon');
const navMenu = document.getElementById('ne-nav-menu');

navButton.addEventListener('click', (e)=>{
    navButton.classList.toggle('active');
    navMenu.classList.toggle('active');
});

