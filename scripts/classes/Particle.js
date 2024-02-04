/*

    Class allows for styled divs and objects.  Pass an objects with determined styles.
    Objects are meant as images - mostly svg - but could be used as other types.

*/
export class Particle{

    constructor( style ){
        this.element = document.createElement(style.element);
        this.element.classList.add('particle', style.layer[0], style.animation);
        if(style.element == 'div'){
            this.element.classList.add(style.shape, style.color);
            this.element.setAttribute('style', `width: ${style.layer[1]}px; ${style.posX[0]} : ${style.posX[1]}%`);
        }
        if(style.element == 'object'){
            this.element.setAttribute('data', style.path + style.src);
            this.element.setAttribute('type', style.type);
            this.element.setAttribute('width', style.layer[1]);
            this.element.setAttribute('height', style.layer[1]);
            this.element.setAttribute('style', `${style.posX[0]} : ${style.posX[1]}%`)
        }
        
    }
    getElement(){
        return this.element;
    }
}
