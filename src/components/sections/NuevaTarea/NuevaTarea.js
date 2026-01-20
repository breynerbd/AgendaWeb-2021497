import { Tareas } from "../Tareas/Tareas.js";
import { getTasksFromStorage, saveTasksToStorage } from "../../common/storage.js";

let NuevaTarea = () => {
    let sectionNuevaTarea = document.createElement("section");
    sectionNuevaTarea.className = "nueva-tarea";

    let h2 = document.createElement("h2");
    h2.textContent = "Añadir Tarea";

    let form = document.createElement("form");

    let labelTitulo = document.createElement("label");
    labelTitulo.textContent = "Título:";
    labelTitulo.htmlFor = "titulo";

    let inputTitulo = document.createElement("input");
    inputTitulo.type = "text";
    inputTitulo.placeholder = "Título";
    inputTitulo.name = "titulo";
    inputTitulo.id = "titulo";
    inputTitulo.required = true;

    let labelPrioridad = document.createElement("label");
    labelPrioridad.textContent = "Prioridad:";
    labelPrioridad.htmlFor = "prioridad";

    let selectPrioridad = document.createElement("select");
    selectPrioridad.name = "prioridad";
    selectPrioridad.id = "prioridad";
    selectPrioridad.required = true;

    const opcionesPrioridad = ["Pendiente", "En proceso", "Realizada"];
    opcionesPrioridad.forEach(opcion => {
        let option = document.createElement("option");
        option.value = opcion;
        option.textContent = opcion;
        selectPrioridad.appendChild(option);
    });

    let labelFecha = document.createElement("label");
    labelFecha.textContent = "Fecha de vencimiento:";
    labelFecha.htmlFor = "fechaVencimiento";

    let inputFecha = document.createElement("input");
    inputFecha.type = "date";
    inputFecha.name = "fechaVencimiento";
    inputFecha.id = "fechaVencimiento";
    inputFecha.required = true;

    let btnAgregar = document.createElement("button");
    btnAgregar.type = "submit";
    btnAgregar.textContent = "Agregar";

    form.appendChild(labelTitulo);
    form.appendChild(inputTitulo);
    form.appendChild(labelPrioridad);
    form.appendChild(selectPrioridad);
    form.appendChild(labelFecha);
    form.appendChild(inputFecha);
    form.appendChild(btnAgregar);

    sectionNuevaTarea.appendChild(h2);
    sectionNuevaTarea.appendChild(form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const tarea = {
            id: Date.now(),
            titulo: inputTitulo.value,
            prioridad: selectPrioridad.value,
            fechaVencimiento: inputFecha.value
        };

        const tareas = getTasksFromStorage();
        tareas.push(tarea);
        saveTasksToStorage(tareas);

        inputTitulo.value = "";
        selectPrioridad.value = "Pendiente";
        inputFecha.value = "";

        container.innerHTML = "";
        container.appendChild(Tareas(container));
    });

    return sectionNuevaTarea
};

export { NuevaTarea };