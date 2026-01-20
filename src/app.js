import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/Contactos/Contactos.js";
import { NuevaTarea } from "./components/sections/NuevaTarea/NuevaTarea.js";
import { NuevoContacto } from "./components/sections/NuevoContacto/NuevoContacto.js";
import { Tareas } from "./components/sections/Tareas/Tareas.js";

let container = document.getElementById("container");
let nav = document.getElementById("nav");

nav.appendChild(Button("Usuario", "usuario", "account.svg"));

nav.appendChild(Button(
    "Agenda",
    "agenda",
    "book.svg",
    () => {
        container.innerHTML = "";
        container.appendChild(Contactos());
    }
));

nav.appendChild(Button(
    "Crear contacto",
    "plus",
    "add.svg",
    () => {
        container.innerHTML = "";
        container.appendChild(NuevoContacto());
    }
));

nav.appendChild(Button(
    "ToDoList",
    "todoList",
    "list.svg",
    () => {
        container.innerHTML = "";
        container.appendChild(Tareas());
    }
));

nav.appendChild(Button(
    "Crear tarea",
    "plus",
    "add.svg",
    () => {
        container.innerHTML = "";
        container.appendChild(NuevaTarea());
    }
));

async function tareas() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        let r = await data.json();
        console.log(r);
    } catch (error) {
        
    }
}

tareas();

container.innerHTML = "";
container.appendChild(Contactos(container));

console.log("Completado");