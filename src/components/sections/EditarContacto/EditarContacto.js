import { getContactsFromStorage, saveContactsToStorage } from "../../common/storage.js";
import { Contactos } from "../Contactos/Contactos.js";

let EditarContacto = (contacto, container) => {
    let section = document.createElement("section");
    section.className = "editar-contacto";

    let h2 = document.createElement("h2");
    h2.textContent = "Editar Contacto";

    let form = document.createElement("form");

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.value = contacto.nombre;
    inputNombre.required = true;

    let inputTelefono = document.createElement("input");
    inputTelefono.type = "tel";
    inputTelefono.value = contacto.telefono;
    inputTelefono.required = true;

    let btnGuardar = document.createElement("button");
    btnGuardar.type = "submit";
    btnGuardar.textContent = "Guardar";

    form.append(inputNombre, inputTelefono, btnGuardar);
    section.append(h2, form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const contactos = getContactsFromStorage();
        const index = contactos.findIndex(c => c.id === contacto.id);
        if (index !== -1) {
            contactos[index].nombre = inputNombre.value;
            contactos[index].telefono = inputTelefono.value;
            saveContactsToStorage(contactos);
        }

        container.innerHTML = "";
        container.appendChild(Contactos(container));
    });

    return section;
};

export { EditarContacto };
