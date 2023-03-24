const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ParticlesArray = [];
let hue = 0;

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});


const mouse = {
    x: undefined,
    y: undefined
}

canvas.addEventListener('click', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    // drawCircle();
    for (let i = 0; i < 5; i++) {
        ParticlesArray.push(new Particle());
    }

});

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue + ', 100%, 50%)';
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        // ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
        // ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// function init(){
//     for(let i =0; i<100; i++){
//         ParticlesArray.push(new Particle());
//     }
// }

// init();

function handleParticles() {
    for (let i = 0; i < ParticlesArray.length; i++) {
        ParticlesArray[i].update();
        ParticlesArray[i].draw();
        if (ParticlesArray[i].size <= 0.3) {
            ParticlesArray.splice(i, 1);
            console.log(ParticlesArray);
            i--;
        }

        // for (let j = i; j < ParticlesArray.length; j++) {
        //     const dx = ParticlesArray[i].x - ParticlesArray[j].x;
        //     const dy = ParticlesArray[i].y - ParticlesArray[j].y;
        //     const distance = Math.sqrt(dx * dx + dy * dy);
        //     if (distance < 100) {
        //     //     ctx.beginPath();
        //     //     ctx.strokeStyle = ParticlesArray[i].color;
        //     //     // ctx.lineWidth = ParticlesArray[i].size / 10;
        //     //     ctx.lineWidth = 0.2;
        //     //     ctx.moveTo(ParticlesArray[i].x, ParticlesArray[i].y);
        //     //     ctx.lineTo(ParticlesArray[j].x, ParticlesArray[j].y);
        //     //     ctx.stroke();
        //     //     ctx.closePath();
        //     // }

        // }
        // if (ParticlesArray[i].size <= 0.3) {
        //     ParticlesArray.splice(i, 1);
        //     console.log(ParticlesArray);
        //     i--;
        // }
    }
}

canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    // drawCircle();
    // ParticlesArray.push(new Particle());
    for (let i = 0; i < 50; i++) {
        ParticlesArray.push(new Particle());
    }
})

// ctx.fillStyle = 'blue';
// ctx.strokeStyle = 'red';
// ctx.lineWidth = 5;
// ctx.beginPath();
// ctx.arc(130, 100, 50, 0, Math.PI * 2);
// ctx.stroke();
// ctx.fill();
// console.log(ctx);


// function drawCircle() {
//     ctx.fillStyle = 'blue';
//     ctx.beginPath();
//     ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
//     ctx.fill();
// }


function animate() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0,0,0,0.02)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
    handleParticles();
    // drawCircle();
    hue += 2;
}
animate();