const balls = document.getElementsByClassName('ball');
document.onmousemove = (e)=>{
  const x = (e.clientX * 100) / window.innerWidth + '%';
  const y = (e.clientY *100) / window.innerHeight + '%';

  for(const ball of balls){
    ball.style.left = x;
    ball.style.top = y;
    ball.transform = `translate(-${x}, -${y})`;
  }
}