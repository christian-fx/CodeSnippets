const particleCount = YOUR_DESIRED_PARTICLE_COUNT; // Set this to the number of particles you want 
const particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3;
        this.speedX = (Math.random() - 0.5) * 0.625;
        this.speedY = (Math.random() - 0.5) * 0.625;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) {
            this.speedX *= -1;
        }
        if (this.y < 0 || this.y > canvas.width) {
            this.speedY *= -1;
        }
    }

    draw() {
        ctx.fillStyle = "#00aaff";
        ctx.shadowColor = "#00aaff";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

initParticles();
animate();


// HOW TO USE
// 1. Create a canvas element in your HTML:
//    <canvas id="myCanvas"></canvas>
// 2. Include this script in your HTML after the canvas element:
//    <script src="particles.js"></script>
// 3. Make sure to set the canvas dimensions in your CSS or JavaScript:
//    canvas.width = window.innerWidth;
//    canvas.height = window.innerHeight;
// 4. Adjust the particleCount variable to increase or decrease the number of particles.
