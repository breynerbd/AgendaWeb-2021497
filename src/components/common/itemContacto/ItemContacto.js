import { deleteContactById, saveContactsToStorage, getContactsFromStorage } from "../../common/storage.js";
import { EditarContacto } from "../../../components/sections/EditarContacto/EditarContacto.js";
import { Contactos } from "../../../components/sections/Contactos/Contactos.js";
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

    let btnFav = document.createElement("img");
    btnFav.src = "./assets/icons/favorite.svg";
    btnFav.alt = "Favorito";
    btnFav.className = "icono-boton";

    btnEliminar.addEventListener("click", () => {
        deleteContactById(contacto.id);
        div.remove();
    });

    btnEditar.addEventListener("click", () => {
        const container = document.getElementById("container");
        container.innerHTML = "";
        container.appendChild(EditarContacto(contacto, container));
    });

    btnInfo.addEventListener("click", () => {
        const container = document.getElementById("container");
        container.appendChild(MostrarContacto(contacto, container));
    });

    btnFav.addEventListener("click", () => {
        const contactos = getContactsFromStorage();
        const index = contactos.findIndex(c => c.id === contacto.id);

        if (index !== -1) {
            const container = document.getElementById("container");

            contactos[index].favorito = !contactos[index].favorito;

            saveContactsToStorage(contactos);

            container.innerHTML = "";
            container.appendChild(Contactos(container));
        }
    });




    botonesDiv.appendChild(btnEditar);
    botonesDiv.appendChild(btnEliminar);
    botonesDiv.appendChild(btnInfo);
    botonesDiv.appendChild(btnFav);

    div.appendChild(etiquetaImg);
    div.appendChild(etiquetaNombre);
    div.appendChild(etiquetaTelefono);
    div.appendChild(botonesDiv);

    return div;
};

export { ItemContacto };
