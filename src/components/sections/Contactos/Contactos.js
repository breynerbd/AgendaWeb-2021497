import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";
import { getContactsFromStorage } from "../../common/storage.js";

let Contactos = (container) => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.className = "contactos-titulo";
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    let contactosGrid = document.createElement("div");
    contactosGrid.className = "contactos-grid";

    const contactos = getContactsFromStorage() || [];

    if (contactos.length === 0) {
        const p = document.createElement("p");
        p.textContent = "No hay contactos guardados";
        contactosGrid.appendChild(p);
    } else {
        contactos.forEach(contacto => {
            contactosGrid.appendChild(ItemContacto(contacto, container));
        });
    }

    sectionContactos.appendChild(contactosGrid);
    return sectionContactos;
};

export { Contactos };
