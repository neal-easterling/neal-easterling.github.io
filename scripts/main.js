import { ParticleController } from "./classes/ParticleController.js";
console.log('main.js connected');

window.onload = ()=>{
    const container = document.querySelector('.particleContainer');
    const handler = new ParticleController(container);
    const runLoop = () => {
        handler.createRandomParticle();
        handler.checkPositions();
    }

    setInterval(runLoop, 1500);

}

