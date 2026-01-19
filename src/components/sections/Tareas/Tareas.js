import { ItemTarea } from "../../common/itemTarea/ItemTarea.js";
import { TaskList } from "./dbTareas.js";

let Tareas = () => {
    let sectionTareas = document.createElement("section");
    sectionTareas.className = "tareas";

    let h2 = document.createElement("h2");
    h2.textContent = "Tareas";
    sectionTareas.appendChild(h2);

    TaskList.forEach((task) => {
        sectionTareas.appendChild(
            ItemTarea("check.svg", task.titulo, task.prioridad)
        );
    });

    return sectionTareas;
};

export { Tareas };
