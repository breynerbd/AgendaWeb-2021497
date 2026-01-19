import { TaskList } from "../Tareas/dbTareas.js";
import { Tareas } from "../Tareas/Tareas.js";

let NuevaTarea = () => {
    let sectionNuevaTarea = document.createElement("section");
    sectionNuevaTarea.className = "nueva-tarea";

    let h2 = document.createElement("h2");
    h2.textContent = "Añadir Tarea";

    let form = document.createElement("form");

    let inputTitulo = document.createElement("input");
    inputTitulo.type = "text";
    inputTitulo.placeholder = "Titulo";
    inputTitulo.name = "nombre";
    inputTitulo.required = true;

    let inputPrioridad = document.createElement("input");
    inputPrioridad.type = "text";
    inputPrioridad.placeholder = "Prioridad";
    inputPrioridad.name = "prioridad";
    inputPrioridad.required = true;

    let btnAgregar = document.createElement("button");
    btnAgregar.type = "submit";
    btnAgregar.textContent = "Agregar";

    form.appendChild(inputTitulo);
    form.appendChild(inputPrioridad);
    form.appendChild(btnAgregar);

    sectionNuevaTarea.appendChild(h2);
    sectionNuevaTarea.appendChild(form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let tarea = {
            titulo: inputTitulo.value,
            prioridad: inputPrioridad.value
        };
        console.log(tarea);
        TaskList.push(tarea);

        inputTitulo.value = "";
        inputPrioridad.value = "";

        container.innerHTML = "";
        container.appendChild(Tareas());
    });

    return sectionNuevaTarea
};

export { NuevaTarea };