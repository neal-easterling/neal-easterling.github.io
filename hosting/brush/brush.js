console.log('brush js loaded');
class Mouse {
    constructor(){
        this.x = 50;
        this.y = 50;
        this.pressedLeft = false;
        this.setPosition();
        this.checkMouseDown();
    }
    setPosition(){
        if(window.addEventListener){
            document.addEventListener('mousemove', (e)=>{
                this.x = e.clientX;
                this.y = e.clientY;
            }, false);
        }
    }
    getPosition(){
        return [this.x, this.y];
    }
    checkMouseDown(){
        if(window.addEventListener){
            document.addEventListener('mousedown', (e)=>{
                this.pressedLeft = true;
            }, false);
            document.addEventListener('mouseup', (e)=>{
                this.pressedLeft = false;
            })
        }
    }
}
class Canvas {
    constructor(id){
        this.element = document.getElementById(id);
        this.boundingRect = this.element.getBoundingClientRect();
        this.left = this.boundingRect.left;
        this.right = this.boundingRect.right;
        this.top = this.boundingRect.top;
        this.bottom = this.boundingRect.bottom;
        this.width = this.boundingRect.width;
        this.height = this.boundingRect.height;
        this.paint = [];
    }
    clearCanvas(){
        this.paint.forEach((dot)=>{
            dot.remove();
        })
    }
}
class Brush{
    constructor(canvas, mouse){
        this.mouse = mouse;
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = 30;
        this.hidden = true;
        this.active = false;
        this.colors = {
            red: "rgba(250, 0, 0, 0.95)", 
            blue: "rgba(0, 0, 250, 0.95)", 
            pencil: "rgba(50, 50, 50, 0.85)", 
            highlighter: "rgba(235, 216, 52, 0.5)" };
        this.currentColor = this.colors.pencil;
        this.canvas = canvas;
        this.element = document.createElement('div');
        this.element.id = 'brush';
        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
        this.element.style.width = this.size + "px";
        canvas.element.appendChild(this.element);
    }
    setPosition(){
        if (!this.hidden){
            this.x = this.mouse.x - this.canvas.left - this.size/2;
            this.y = this.mouse.y - this.canvas.top - this.size/2;
        }

        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
    }
    checkVisibility(){
        if (this.mouse.x > this.canvas.left && this.mouse.x < this.canvas.right && this.mouse.y > this.canvas.top && this.mouse.y < this.canvas.bottom){
            this.hidden = false;
            this.element.style.opacity = "100%";
        }else{
            this.element.style.opacity = "0%";
        }
    }
    checkActive(){
        this.active = this.mouse.pressedLeft;
    }
    createDot(){
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.width = this.size + "px";
        dot.style.backgroundColor = this.currentColor;
        dot.style.left = this.x + "px";
        dot.style.top = this.y + "px";
        this.canvas.paint.push(dot);
        this.canvas.element.appendChild(dot);
    }
    paint(){
        if(this.active){
            this.createDot();
        }
    }
    update(){
        this.checkVisibility();
        this.checkActive();
        this.setPosition();
        this.paint();
    }
}

const canvas = new Canvas('mainCanvas');
const mouse = new Mouse();
const brush = new Brush(canvas, mouse);
const update = ()=>{
    brush.update();
}
const clearBut = document.getElementById('clear');
clearBut.addEventListener('click', (e)=>{
    canvas.clearCanvas();
});
const redBut = document.getElementById('red');
redBut.addEventListener('click', (e)=>{
    brush.currentColor = brush.colors.red;
});
const blueBut = document.getElementById('blue');
blueBut.addEventListener('click', (e)=>{
    brush.currentColor = brush.colors.blue;
});
const pencilBut = document.getElementById('pencil');
pencilBut.addEventListener('click', (e)=>{
    brush.currentColor = brush.colors.pencil;
});
const highBut = document.getElementById('yellowHigh');
highBut.addEventListener('click', (e)=>{
    brush.currentColor = brush.colors.highlighter;
})


setInterval(update, 1);
