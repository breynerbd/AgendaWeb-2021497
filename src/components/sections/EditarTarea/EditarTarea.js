import { getTasksFromStorage, saveTasksToStorage } from "../../common/storage.js";
import { Tareas } from "../Tareas/Tareas.js";

let EditarTarea = (tarea, container) => {
    let section = document.createElement("section");
    section.className = "nueva-tarea";

    let h2 = document.createElement("h2");
    h2.textContent = "Editar Tarea";

    let form = document.createElement("form");

    let inputTitulo = document.createElement("input");
    inputTitulo.type = "text";
    inputTitulo.value = tarea.titulo;
    inputTitulo.required = true;

    let selectPrioridad = document.createElement("select");
    ["Pendiente", "En proceso", "Realizada"].forEach(p => {
        let option = document.createElement("option");
        option.value = p;
        option.textContent = p;
        if (p === tarea.prioridad) option.selected = true;
        selectPrioridad.appendChild(option);
    });

    let inputFecha = document.createElement("input");
    inputFecha.type = "date";
    inputFecha.value = tarea.fechaVencimiento;
    inputFecha.required = true;

    let btnGuardar = document.createElement("button");
    btnGuardar.type = "submit";
    btnGuardar.textContent = "Guardar";

    form.append(inputTitulo, selectPrioridad, inputFecha, btnGuardar);
    section.append(h2, form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const tareas = getTasksFromStorage();
        const index = tareas.findIndex(t => t.id === tarea.id);
        if (index !== -1) {
            tareas[index].titulo = inputTitulo.value;
            tareas[index].prioridad = selectPrioridad.value;
            tareas[index].fechaVencimiento = inputFecha.value;
            saveTasksToStorage(tareas);
        }

        container.innerHTML = "";
        container.appendChild(Tareas(container));
    });

    return section;
};

export { EditarTarea };
