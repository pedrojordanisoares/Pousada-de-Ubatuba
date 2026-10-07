const ceu = document.getElementById('ceu');
const montanha = document.getElementById('montanha');
const praia = document.getElementById('praia');
const mata = document.getElementById('mata');

if (ceu && montanha && praia && mata) {
    window.addEventListener('scroll', () => {

        const value = window.scrollY;

        ceu.style.transform = `translateY(${value * 0.1}px)`;

        montanha.style.transform = `translateY(${value * 0.2}px)`;

        praia.style.transform = `translateY(${value * 0.3}px)`;

        mata.style.transform = `translateY(${value * 0.4}px)`;

    });
}
