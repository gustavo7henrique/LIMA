const container = document.querySelector('.container');
container.style.backgroundColor = '#f99632ff'

const titulo = document.getElementById('titulo')
titulo.style.fontSize = '28px';
titulo.style.color = 'white';
titulo.textContent = 'Manipulando o HTML via JS';

const paragrafo = '<p>Eu sei acrescentar elementos via javaScript, isso me torna super poderoso!</p>'
container.innerHTML += paragrafo;

