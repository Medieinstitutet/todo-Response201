export const background = () => {
    const particleContainer = document.createElement('div')
    particleContainer.classList.add('particle-container')
    document.body.appendChild(particleContainer)
    
    for (let i = 0; i < 200; i++) {
        const particle = document.createElement('div')
        particle.classList.add('particle')
        particleContainer.appendChild(particle)
        /* give every third element a special class*/
        if (i % 3 === 2) {
            particle.classList.add('particle--green');
        }
    }
}
