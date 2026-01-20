import { ItemTarea } from "../../common/itemTarea/ItemTarea.js";
import { getTasksFromStorage } from "../../common/storage.js";

let Tareas = () => {
    let sectionTareas = document.createElement("section");
    sectionTareas.className = "tareas";

    let h2 = document.createElement("h2");
    h2.textContent = "Tareas";
    sectionTareas.appendChild(h2);

    const tareas = getTasksFromStorage();

    tareas.forEach((task) => {
        sectionTareas.appendChild(ItemTarea("check.svg", 
            task.titulo, task.prioridad)
        );
    });

    return sectionTareas;
};

export { Tareas };
