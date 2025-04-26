const light = document.createElement('div');
light.classList.add('cursor-light');
document.body.appendChild(light);

document.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const r = Math.round((x / width) * 255);
    const g = Math.round((y / height) * 255);
    const b = Math.round(255 - ((x + y) / (width + height)) * 255);

    light.style.left = `${x}px`;
    light.style.top = `${y}px`;
    light.style.background = `radial-gradient(circle, rgba(${r}, ${g}, ${b}, 0.4) 0%, rgba(${r}, ${g}, ${b}, 0) 80%)`;
});

// Glow harder when mouse is pressed
document.addEventListener('mousedown', () => {
    light.style.transform = 'translate(-50%, -50%) scale(1.5)';
    light.style.filter = 'blur(40px)';
    light.style.transition = 'transform 0.2s ease, filter 0.2s ease, background 0.2s';
});

// Return to normal when mouse is released
document.addEventListener('mouseup', () => {
    light.style.transform = 'translate(-50%, -50%) scale(1)';
    light.style.filter = 'blur(80px)';
});
