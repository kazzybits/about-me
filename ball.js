const ball = document.createElement('div');
document.body.appendChild(ball);

function moveBall() {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
    ball.style.position = 'absolute';
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'red';
    ball.style.borderRadius = '50%';

    requestAnimationFrame(moveBall);
}

requestAnimationFrame(moveBall);

document.body.style.backgroundColor = 'lightblue';