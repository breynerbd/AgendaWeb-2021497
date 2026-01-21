import { Contactos } from "../Contactos/Contactos.js";

let MostrarContacto = (contacto, container) => {
    if (!contacto || !container) return;

    const section = document.createElement("section");
    section.className = "contacto-overlay";

    const tarjeta = document.createElement("div");
    tarjeta.className = "contacto-tarjeta";

    const fotoGrande = document.createElement("img");
    fotoGrande.src = "./assets/icons/account.svg";
    fotoGrande.className = "foto-grande";

    const nombre = document.createElement("p");
    nombre.textContent = `Nombre: ${contacto.nombre || "N/A"}`;

    const telefono = document.createElement("p");
    telefono.textContent = `Teléfono: ${contacto.telefono || "N/A"}`;

    const btnCerrar = document.createElement("button");
    btnCerrar.textContent = "Cerrar";
    btnCerrar.className = "btn-cerrar";
    btnCerrar.addEventListener("click", () => {
        container.innerHTML = ""; 
        container.appendChild(Contactos(container)); 
    });

    tarjeta.append(fotoGrande, nombre, telefono, btnCerrar);
    section.appendChild(tarjeta);

    return section;
};

export { MostrarContacto };
