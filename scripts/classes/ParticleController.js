import {Particle} from './Particle.js';

//==== DEFINED BY CLASSES AND URL
export const defaultStyles = {
    element: ['div','object'],
    type: ['image/svg+xml'],
    path: 'https://neal-easterling.github.io/img/svg/color/',
    src:['after-effects-color.svg', 'blender-color.svg', 'css3-color.svg', 'expressjs-color.svg', 'figma-color.svg', 'github-color.svg', 'html5-color.svg', 'illustrator-color.svg', 'javascript-color.svg', 'mongodb-color.svg', 'nodejs-color.svg', 'photoshop-color.svg', 'premiere-color.svg', 'reactjs-color.svg' ],
    shapes : ['box'],
    colors: ['red', 'blue', 'yellow'], 
    layers : [['layer1', 50], ['layer2', 75 ], ['layer3', 125]],
    animations : ['float'],
    rangeX: ['right', 100]
}

export class ParticleController{

    constructor(container, options = defaultStyles) {
        this.options = options;
        this.container = container;
    }

    getRandomInt(max){
        return Math.floor(Math.random() * max);
    }
    getRandomStyle(){
        let style = {
            element: this.options.element[this.getRandomInt(this.options.element.length )],
            type: this.options.type[this.getRandomInt(this.options.type.length)],
            path: this.options.path,
            src: this.options.src[this.getRandomInt(this.options.src.length)],
            shape: this.options.shapes[this.getRandomInt(this.options.shapes.length)],
            color: this.options.colors[this.getRandomInt(this.options.colors.length)],
            layer: this.options.layers[this.getRandomInt(this.options.layers.length)],
            animation: this.options.animations[this.getRandomInt(this.options.animations.length)],
            posX: [this.options.rangeX[0],this.getRandomInt(this.options.rangeX[1])]
        }
        // console.log(style.posX);
        return style;
    } 
    createRandomParticle(){
        let particle = new Particle(this.getRandomStyle()).getElement();
        this.container.appendChild(particle);
    }
    checkPositions(){
        let particleArray = this.container.childNodes;
        //console.log(particleArray);
        particleArray.forEach((particle) => {
            let position = particle.getBoundingClientRect();
            if(position.bottom < -20){
                particle.remove();
                //console.log('removed');
            }
        })
    }
}