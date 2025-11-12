const paginas = document.querySelectorAll('.minilibro-pagina');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
const indicador = document.getElementById('indicador');

let paginaActual = 0;

function mostrarPagina(index) {
  paginas.forEach((p, i) => {
    p.classList.toggle('visible', i === index);
  });
  indicador.textContent = `Página ${index + 1} / ${paginas.length}`;
}

anterior.addEventListener('click', () => {
  paginaActual = (paginaActual - 1 + paginas.length) % paginas.length;
  mostrarPagina(paginaActual);
});

siguiente.addEventListener('click', () => {
  paginaActual = (paginaActual + 1) % paginas.length;
  mostrarPagina(paginaActual);
});

mostrarPagina(paginaActual);
