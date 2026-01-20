
import { login } from "./src/components/sections/Login/Login.js";

container.innerHTML = "";
container.appendChild(Contactos(container));


let root = document.getElementById("root");
root.appendChild(login());