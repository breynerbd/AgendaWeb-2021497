import { deleteTaskById } from "../../common/storage.js";
import { EditarTarea } from "../../sections/EditarTarea/EditarTarea.js";

let ItemTarea = (tarea) => {
    let div = document.createElement("div");
    div.className = "item-tarea";

    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/check.svg`;

    let etiquetaTitulo = document.createElement("p");
    etiquetaTitulo.textContent = tarea.titulo;

    let etiquetaPrioridad = document.createElement("p");
    etiquetaPrioridad.textContent = tarea.prioridad;
    etiquetaPrioridad.className = "prioridad-tarea";

    let etiquetaFecha = document.createElement("p");
    etiquetaFecha.textContent = tarea.fechaVencimiento;
    etiquetaFecha.className = "fecha-tarea";

    let botonesDiv = document.createElement("div");
    botonesDiv.className = "item-contacto-botones";

    let btnEditar = document.createElement("img");
    btnEditar.src = "./assets/icons/edit.svg";
    btnEditar.alt = "Editar";
    btnEditar.className = "icono-boton";

    let btnEliminar = document.createElement("img");
    btnEliminar.src = "./assets/icons/delete.svg";
    btnEliminar.alt = "Eliminar";
    btnEliminar.className = "icono-boton";

    btnEliminar.addEventListener("click", () => {
        deleteTaskById(tarea.id);
        div.remove();
    });

    btnEditar.addEventListener("click", () => {
        container.innerHTML = "";
        container.appendChild(EditarTarea(tarea, container));
    });

    botonesDiv.appendChild(btnEditar);
    botonesDiv.appendChild(btnEliminar);

    div.appendChild(etiquetaImg);
    div.appendChild(etiquetaTitulo);
    div.appendChild(etiquetaPrioridad);
    div.appendChild(etiquetaFecha);
    div.appendChild(botonesDiv);

    return div;
};

export { ItemTarea };
