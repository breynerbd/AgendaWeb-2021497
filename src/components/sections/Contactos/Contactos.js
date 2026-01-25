import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";
import { getContactsFromStorage } from "../../common/storage.js";

let Contactos = (container) => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.className = "contactos-titulo";
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    let favSection = document.createElement("div");
    favSection.id = "favoritos";

    let favTitle = document.createElement("h3");
    favTitle.textContent = "> Favoritos";
    favSection.appendChild(favTitle);

    let favGrid = document.createElement("div");
    favGrid.className = "favoritos";
    favSection.appendChild(favGrid);

    sectionContactos.appendChild(favSection);

    let contTitle = document.createElement("h3");
    contTitle.textContent = "> Contactos";

    let contactosGrid = document.createElement("div");
    contactosGrid.className = "contactos-grid";

    const contactos = getContactsFromStorage() || [];
    const favoritos = contactos.filter(c => c.favorito);
    const normales = contactos.filter(c => !c.favorito);

    if (contactos.length === 0) {
        const p = document.createElement("p");
        p.textContent = "No hay contactos guardados";
        contactosGrid.appendChild(p);
    } else {
        favoritos.forEach(contacto => {
            favGrid.appendChild(ItemContacto(contacto, container));
        });

        normales.forEach(contacto => {
            contactosGrid.appendChild(ItemContacto(contacto, container));
        });
    }

    sectionContactos.append(contTitle, contactosGrid);

    return sectionContactos;
};

export { Contactos };
