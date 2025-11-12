const paginas = document.querySelectorAll(".minilibro-pagina");
const indicador = document.getElementById("indicador");
const siguiente = document.getElementById("siguiente");
const anterior = document.getElementById("anterior");

let paginaActual = 0;

function mostrarPagina(nueva) {
  if (nueva < 0 || nueva >= paginas.length) return;

  const actual = paginas[paginaActual];
  const siguientePag = paginas[nueva];

  actual.classList.remove("visible");
  actual.classList.add("saliente");

  setTimeout(() => {
    actual.classList.remove("saliente");
    siguientePag.classList.add("visible");
    paginaActual = nueva;
    indicador.textContent = `Página ${paginaActual + 1} / ${paginas.length}`;
  }, 400);
}

siguiente.addEventListener("click", () => mostrarPagina(paginaActual + 1));
anterior.addEventListener("click", () => mostrarPagina(paginaActual - 1));
