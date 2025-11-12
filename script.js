const paginas = document.querySelectorAll('.minilibro-pagina');
const btnAnterior = document.getElementById('anterior');
const btnSiguiente = document.getElementById('siguiente');
const btnFlechaAbajo = document.getElementById('flechaAbajo');
const contenedor = document.getElementById('minilibro');

let paginaActual = 0;

// Mostrar página actual y actualizar visibilidad
function mostrarPagina(index) {
  paginas.forEach((pagina, i) => {
    if (i === index) {
      pagina.classList.add('visible');
      pagina.setAttribute('tabindex', '0');
      pagina.focus();  // Para usuarios de teclado mover foco
    } else {
      pagina.classList.remove('visible');
      pagina.removeAttribute('tabindex');
    }
  });
  
  // Deshabilitar botones cuando falta siguiente o anterior
  btnAnterior.disabled = (index === 0);
  btnSiguiente.disabled = (index === paginas.length - 1);
  
  // Reset scroll vertical al cambiar de página
  paginas[index].scrollTop = 0;
  actualizarIndicador();
}

// Indicador de página visible
const indicador = document.getElementById('indicador');
function actualizarIndicador() {
  indicador.textContent = `Página ${paginaActual + 1} / ${paginas.length}`;
}

// Eventos botones Next / Prev
btnAnterior.addEventListener('click', () => {
  if (paginaActual > 0) {
    paginaActual--;
    mostrarPagina(paginaActual);
  }
});

btnSiguiente.addEventListener('click', () => {
  if (paginaActual < paginas.length - 1) {
    paginaActual++;
    mostrarPagina(paginaActual);
  }
});

// Evento botón bajar scroll contenido
btnFlechaAbajo.addEventListener('click', () => {
  const paginaVisible = paginas[paginaActual];
  const scrollMax = paginaVisible.scrollHeight - paginaVisible.clientHeight;
  const scrollStep = 100;
  if (paginaVisible.scrollTop + scrollStep < scrollMax) {
    paginaVisible.scrollBy({ top: scrollStep, behavior: 'smooth' });
  } else {
    // Si ya estás al final, opcionalmente avanza página si no es la última
    if (paginaActual < paginas.length - 1) {
      paginaActual++;
      mostrarPagina(paginaActual);
    }
  }
});

// Inicializar mostrando la primera
mostrarPagina(paginaActual);
