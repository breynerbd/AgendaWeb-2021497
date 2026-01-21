import { deleteContactById } from "../../common/storage.js";
import { EditarContacto } from "../../../components/sections/EditarContacto/EditarContacto.js";
import { MostrarContacto } from "../../sections/TarjetaDatos/TarjetaDatos.js";

let ItemContacto = (contacto, container) => {
    let div = document.createElement("div");
    div.className = "item-contacto";

    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/account.svg`;
    etiquetaImg.className = "foto-contacto";

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.textContent = contacto.nombre;

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.textContent = contacto.telefono;

    let botonesDiv = document.createElement("div");
    botonesDiv.className = "item-contacto-botones";

    let btnEditar = document.createElement("img");
    btnEditar.src = "./assets/icons/edit.svg";
    btnEditar.alt = "Editar";
    btnEditar.className = "icono-boton";

    let btnEliminar = document.createElement("img");
    btnEliminar.src = "./assets/icons/delete.svg";
    btnEliminar.alt = "Eliminar";
    btnEliminar.className = "icono-boton";

    let btnInfo = document.createElement("img");
    btnInfo.src = "./assets/icons/info.svg";
    btnInfo.alt = "Info";
    btnInfo.className = "icono-boton";

    btnEliminar.addEventListener("click", () => {
        deleteContactById(contacto.id);
        div.remove();
    });

    btnEditar.addEventListener("click", () => {
        container.innerHTML = "";
        container.appendChild(EditarContacto(contacto, container));
    });

    btnInfo.addEventListener("click", () => {
        container.appendChild(MostrarContacto(contacto, container));
    });

    botonesDiv.appendChild(btnEditar);
    botonesDiv.appendChild(btnEliminar);
    botonesDiv.appendChild(btnInfo);

    div.appendChild(etiquetaImg);
    div.appendChild(etiquetaNombre);
    div.appendChild(etiquetaTelefono);
    div.appendChild(botonesDiv);

    return div;
};

export { ItemContacto };
