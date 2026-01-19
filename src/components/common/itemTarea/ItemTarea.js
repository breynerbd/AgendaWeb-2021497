let ItemTarea = (imgTarea, titulo, prioridad) => {
    let div = document.createElement("div");
    div.className = "item-tarea";

    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${imgTarea}`;

    let etiquetaTitulo = document.createElement("p");
    etiquetaTitulo.textContent = titulo;

    let etiquetaPrioridad = document.createElement("p");
    etiquetaPrioridad.textContent = prioridad;

    div.appendChild(etiquetaImg);
    div.appendChild(etiquetaTitulo);
    div.appendChild(etiquetaPrioridad);

    return div;
};

export { ItemTarea };