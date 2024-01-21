console.log('brush js loaded');
class Mouse {
    constructor(){
        this.x = 50;
        this.y = 50;
    }
    setPosition(){
        if(window.addEventListener){
            document.addEventListener('mousemove', (e)=>{
                this.x = e.clientX;
                this.y = e.clientY;
                console.log (this.x, this.y);
            }, false);
        }
    }
}
class Brush{
    constructor(canvas, x, y){
        this.x = x;
        this.y = y;
        this.element = document.createElement('div');
        this.element.id = 'brush';
        this.element.style.left = x + "px";
        this.element.style.top = y + "px";
        canvas.appendChild(this.element);
        console.log(this.element);
    }
    setPosition(x, y){
        this.x = x;
        this.y = y;
        this.element
    }
}
const canvas = document.getElementById('mainCanvas');
const mouse = new Mouse();
//mouse.setPosition();
const brush = new Brush(canvas, mouse.x, mouse.y);
