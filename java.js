// JavaScript Code for Enhancing the Website

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to create falling rose petals
document.addEventListener('DOMContentLoaded', () => {
    const createPetal = () => {
        const petal = document.createElement('div');
        petal.className = 'rose-petal';
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDuration = `${Math.random() * 2 + 3}s`;
        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 5000);
    };

    // Button to toggle falling rose petals
    const petalButton = document.createElement('button');
    petalButton.innerText = 'Make Roses Fall';
    petalButton.id = 'petal-button';
    petalButton.style.position = 'fixed';
    petalButton.style.bottom = '20px';
    petalButton.style.right = '20px';
    petalButton.style.padding = '10px 20px';
    petalButton.style.backgroundColor = '#f54291';
    petalButton.style.color = 'white';
    petalButton.style.border = 'none';
    petalButton.style.borderRadius = '5px';
    petalButton.style.cursor = 'pointer';
    document.body.appendChild(petalButton);

    let petalInterval;

    petalButton.addEventListener('click', () => {
        if (petalInterval) {
            clearInterval(petalInterval);
            petalInterval = null;
            petalButton.innerText = 'Make Roses Fall';
        } else {
            petalInterval = setInterval(createPetal, 200);
            petalButton.innerText = 'Stop Roses';
        }
    });
});

// CSS for rose petals
const style = document.createElement('style');
style.innerText = `
    .rose-petal {
        position: fixed;
        top: -50px;
        width: 20px;
        height: 20px;
        background-color: #f54291;
        border-radius: 50%;
        opacity: 0.7;
        pointer-events: none;
        animation: fall 5s linear infinite;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

