let MostrarContacto = (contacto) => {
    const overlay = document.createElement("div");
    overlay.className = "contacto-overlay";

    const tarjeta = document.createElement("div");
    tarjeta.className = "contacto-tarjeta";

    const fotoGrande = document.createElement("img");
    fotoGrande.src = "./assets/icons/account.svg";
    fotoGrande.className = "foto-grande";

    const nombre = document.createElement("p");
    nombre.textContent = `Nombre: ${contacto.nombre}`;

    const telefono = document.createElement("p");
    telefono.textContent = `Teléfono: ${contacto.telefono}`;

    const btnCerrar = document.createElement("button");
    btnCerrar.textContent = "Cerrar";
    btnCerrar.className = "btn-cerrar";
    btnCerrar.addEventListener("click", () => overlay.remove());

    tarjeta.append(fotoGrande, nombre, telefono, btnCerrar);
    overlay.appendChild(tarjeta);

    // Se agrega al body, no al container
    document.body.appendChild(overlay);
};

export { MostrarContacto };
