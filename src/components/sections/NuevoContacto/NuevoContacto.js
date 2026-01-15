import { ContactList } from "../Contactos/db.js";

let NuevoContacto = () => {
    let sectionNuevoContacto = document.createElement("section");
    sectionNuevoContacto.className = "nuevo-contacto";

    // Título
    let h2 = document.createElement("h2");
    h2.textContent = "Añadir Contacto";

    // Formulario
    let form = document.createElement("form");

    // Input Nombre
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre";
    inputNombre.name = "nombre";
    inputNombre.required = true;

    // Input Teléfono
    let inputTelefono = document.createElement("input");
    inputTelefono.type = "tel";
    inputTelefono.placeholder = "Teléfono";
    inputTelefono.name = "telefono";
    inputTelefono.required = true;

    // Botón Agregar
    let btnAgregar = document.createElement("button");
    btnAgregar.type = "submit";
    btnAgregar.textContent = "Agregar";


    // Estructura
    form.appendChild(inputNombre);
    form.appendChild(inputTelefono);
    form.appendChild(btnAgregar);

    sectionNuevoContacto.appendChild(h2);
    sectionNuevoContacto.appendChild(form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let contacto = {
            nombre: inputNombre.value,
            telefono: inputTelefono.value
        };
        console.log(contacto);
        ContactList.push(contacto);
    });



    return sectionNuevoContacto;
};

export { NuevoContacto };
