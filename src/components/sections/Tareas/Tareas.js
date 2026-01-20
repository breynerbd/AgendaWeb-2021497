import { ItemTarea } from "../../common/itemTarea/ItemTarea.js";
import { getTasksFromStorage } from "../../common/storage.js";

let Tareas = (container) => {
    let sectionTareas = document.createElement("section");
    sectionTareas.className = "tareas";

    let h2 = document.createElement("h2");
    h2.textContent = "Tareas";
    sectionTareas.appendChild(h2);

    const tareas = getTasksFromStorage();

    tareas.forEach((task) => {
        sectionTareas.appendChild(ItemTarea(task, container));
    });


    return sectionTareas;
};

export { Tareas };
