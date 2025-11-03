const corpo = document.body;

const container = document.querySelector('.container');
const titulo = document.getElementById('titulo');
const paragrafo = document.querySelector('[data-info="intro"]')

corpo.style.backgroundColor = "#007c97";
container.style.border = '2px solid black ';
titulo.style.fontFamily = 'Arial';
titulo.style.fontSize = '48px';
titulo.style.color = 'white';
titulo.textContent += 'DOM';
paragrafo.textContent += 'DOM';
paragrafo.style.color = 'white';
paragrafo.style.fontFamily = 'Arial';