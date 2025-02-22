document.addEventListener('mousemove', function(event) {
    const bubbles = document.querySelectorAll('.bubble');

    bubbles.forEach(function(bubble) {
        const speed = 0.07; // A velocidade do movimento

        // Pega a posição atual da bolha e a posição do cursor
        let bubbleX = bubble.getBoundingClientRect().left + bubble.offsetWidth / 2;
        let bubbleY = bubble.getBoundingClientRect().top + bubble.offsetHeight / 2;

        // Calcula a direção do movimento
        let deltaX = event.clientX - bubbleX;
        let deltaY = event.clientY - bubbleY;

        // Aplica a transformação para mover a bolha suavemente
        bubble.style.transform = `translate(${deltaX * speed}px, ${deltaY * speed}px)`;
    });

    const textos = [
        "Back-end | Java",
        "Web.",
        "Android.",
        "Criativo.",
        "Inovador."
    ];

    let index = 0;
    const textoElement = document.getElementById("texto");

    function mudarTexto() {
        textoElement.textContent = textos[index];
        index = (index + 1) % textos.length; // Cicla entre os textos
    }

    // Muda o texto a cada 3 segundos (3000 milissegundos)
    setInterval(mudarTexto, 3000);
});

let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abir-menu');
});

menu.addEventListener('click', () => {
    menu.classList.remove('abir-menu');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abir-menu');
});