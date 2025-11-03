const imagens = document.getElementById('imagens');

const input = document.querySelector('.campoTexto');

imagens.setAttribute('src', 'https://cdn.pixabay.com/photo/2017/01/02/17/28/christmas-1947414_1280.jpg');
imagens.setAttribute('alt', 'imagem_natal');
alert(imagens.getAttribute('src'));

input.setAttribute('placeholder', 'Digite seu nome')
imagens.classList.add("esconder")