const particleCount: number = 100; // YOUR DESIRED PARTICLE COUNT
const particles: Particle[] = [];
const canvas = document.getElementById("particleCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;

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

        // Conditionals for bounce effects
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
