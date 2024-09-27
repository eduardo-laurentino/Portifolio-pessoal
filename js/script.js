document.querySelector(".drawer").addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("open");
});

//Slides habilidades
// Array de imagens
const images = [
    'assets/images/css.png',
    'assets/images/firebase.png',
    'assets/images/html.png',
    'assets/images/javascript.png',
    'assets/images/python.png'
];

// Selecionando as imagens pelo ID ou pela classe
const imgSkillsElements = document.querySelectorAll('.slides-skills');
const imgServicesElements = document.querySelectorAll('.slides-services');
const imgProjectsElements = document.querySelectorAll('.slides-projects');

let currentImageSkillsIndex = 0;
let currentImageServicesIndex = 0;
let currentImageProjectsIndex = 0;

// Função para alterar as imagens dinamicamente
function changeSkillsImages() {
    imgSkillsElements.forEach((img, index) => {
        // Atualiza a imagem de cada elemento com a próxima do array
        img.src = images[(currentImageSkillsIndex + index) % images.length];
    });

    // Incrementa o índice da imagem, voltando ao início quando chegar ao fim
    currentImageSkillsIndex = (currentImageSkillsIndex + 1) % images.length;
}

// Função para alterar as imagens dinamicamente
function changeServicesImages() {
    imgServicesElements.forEach((img, index) => {
        // Atualiza a imagem de cada elemento com a próxima do array
        img.src = images[(currentImageServicesIndex + index) % images.length];
    });

    // Incrementa o índice da imagem, voltando ao início quando chegar ao fim
    currentImageServicesIndex = (currentImageServicesIndex + 1) % images.length;
}

// Função para alterar as imagens dinamicamente
function changeProjectsImages() {
    imgProjectsElements.forEach((img, index) => {
        // Atualiza a imagem de cada elemento com a próxima do array
        img.src = images[(currentImageProjectsIndex + index) % images.length];
    });

    // Incrementa o índice da imagem, voltando ao início quando chegar ao fim
    currentImageProjectsIndex = (currentImageProjectsIndex + 1) % images.length;
}

// Iniciar a troca de imagens a cada 3 segundos quando a página carregar
window.onload = function () {
    setInterval(changeSkillsImages, 3000); // Troca as imagens a cada 3 segundos
    setInterval(changeServicesImages, 3000); // Troca as imagens a cada 3 segundos
    setInterval(changeProjectsImages, 3000); // Troca as imagens a cada 3 segundos
};