// 🌸 Pétalos cayendo
function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerHTML = "🌸";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (3 + Math.random() * 5) + "s";
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 8000);
}
setInterval(createPetal, 500);

// ⏳ Cuenta regresiva
const targetDate = new Date("2025-10-15 00:00:00").getTime(); // <-- cambia la fecha aquí
const countdown = document.getElementById("countdown");

setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdown.innerHTML = `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}, 1000);

// ❤️ Corazones al hacer clic
document.addEventListener("click", function (e) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
});

// Lista de frases románticas 💛
const frases = [
    "Cada momento contigo es primavera 🌸",
    "Eres mi sol en los días grises ☀️",
    "En tu sonrisa florece mi mundo 🌼",
    "Eres la razón de mis mejores recuerdos 💕",
    "Si existiera un jardín perfecto, tú serías el girasol más bello 🌻"
];

// Elementos
const fraseElemento = document.getElementById("fraseRomantica");
const carousel = document.getElementById("carouselSorpresa");

// Escucha cuando el carrusel cambia de slide
carousel.addEventListener("slid.bs.carousel", function (event) {
    const index = event.to; // índice del slide actual
    fraseElemento.textContent = frases[index]; // cambia el texto
});
