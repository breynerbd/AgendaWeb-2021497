import { Contactos } from "./components/sections/Contactos/Contactos.js";
import { NuevoContacto } from "./components/sections/NuevoContacto/NuevoContacto.js";

let container = document.getElementById("container");

let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewNewContact = function () {
    container.innerHTML = "";
    container.appendChild(NuevoContacto());
}

export {viewContacts, viewNewContact};