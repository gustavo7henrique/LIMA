const imagens = document.getElementById('imagens');

const input = document.querySelector('.campoTexto');

imagens.setAttribute('src', 'https://i1.sndcdn.com/artworks-6jvtnBVpGjlZB6zw-V8iuuA-t500x500.png');
imagens.setAttribute('alt', 'imagem_natal');
alert(imagens.getAttribute('src'));

input.setAttribute('placeholder', 'Digite seu nome')
imagens.classList.add("brain");

const fundo = document.getElementById('fundo');
fundo.style.backgroundColor = 'black'

const titulo = document.getElementById('titulo');
titulo.style.fontFamily = 'Arial';
titulo.style.fontSize = '40px';
titulo.textContent = 'Gustavo Henrique'

const container = document.querySelector('.container')

const paragrafo = '<p>Aprendendo a cada dia no SENAI - Hoje foi InnerHTML e Dom...</p>'
container.innerHTML += paragrafo;

container.style.backgroundColor = 'gray'

