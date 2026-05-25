// ===== Cache de elementos =====
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sections = document.querySelectorAll('section');

// ===== Scroll suave e destaque do menu ativo =====
navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Remove active de todos os links
            navLinks.forEach(link => link.classList.remove('active'));
            // Adiciona active ao link clicado
            this.classList.add('active');
            
            // Scroll suave
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Efeito de sombra no header com throttle =====
let scrollTimeout;
function updateHeaderShadow() {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        header.style.boxShadow = 'none';
    }
}

window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateHeaderShadow, 10);
}, { passive: true });

// ===== Intersection Observer para seções e destaque ativo =====
const observerOptions = {
    threshold: 0.3,
    rootMargin: '-80px 0px -66%'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove active de todos os links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Adiciona active ao link correspondente
            const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
            if (activeLink) activeLink.classList.add('active');
            
            // Adiciona animação de entrada
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// ===== Falling Pattern Animation =====
class FallingParticle {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        
        // Configurações customizáveis
        this.config = {
            color: options.color || 'rgba(14, 79, 177, 0.5)', // Cor primária do portfólio
            particleCount: options.particleCount || 80,
            particleSize: options.particleSize || 2,
            speed: options.speed || 0.5,
            blur: options.blur || 0.5,
            ...options
        };
        
        this.particles = [];
        this.init();
    }
    
    init() {
        // Criar partículas
        for (let i = 0; i < this.config.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height - this.height,
                size: Math.random() * this.config.particleSize + 1,
                speed: Math.random() * this.config.speed + 0.3,
                opacity: Math.random() * 0.5 + 0.3,
                vx: (Math.random() - 0.5) * 0.5 // Movimento horizontal leve
            });
        }
    }
    
    update() {
        this.particles.forEach(particle => {
            // Cair verticalmente
            particle.y += particle.speed;
            
            // Movimento horizontal leve (wave effect)
            particle.x += particle.vx;
            
            // Limitar x dentro do canvas
            if (particle.x < 0) particle.x = this.width;
            if (particle.x > this.width) particle.x = 0;
            
            // Resetar partícula quando sair da tela
            if (particle.y > this.height) {
                particle.y = -10;
                particle.x = Math.random() * this.width;
            }
        });
    }
    
    draw() {
        // Limpar canvas com transparência
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        // Desenhar partículas
        this.ctx.fillStyle = this.config.color;
        this.particles.forEach(particle => {
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
        });
        this.ctx.globalAlpha = 1;
    }
    
    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Inicializar canvas ao carregar a página
function initFallingPattern() {
    const canvas = document.getElementById('falling-pattern');
    if (!canvas) return;
    
    const hero = document.getElementById('hero');
    
    // Redimensionar canvas para cobrir a seção hero
    function resizeCanvas() {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    }
    
    resizeCanvas();
    
    // Redimensionar canvas ao mudar a janela
    window.addEventListener('resize', resizeCanvas);
    
    // Iniciar animação
    const fallingPattern = new FallingParticle(canvas, {
        color: 'rgba(14, 79, 177, 0.6)',
        particleCount: 80,
        particleSize: 2,
        speed: 0.5
    });
    
    fallingPattern.animate();
}

// Iniciar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFallingPattern);
} else {
    initFallingPattern();
}