 
//import {menu} from "./menu.js";
//
//root.innerHTML = "<h1>Hola mundo</h1>";
//
//let h1 = document.createElement("h1");
//h1.innerHTML = "Etiquetas para texto";
//root.appendChild(h1);
//
//let lista = document.createElement("ul");
//
//let li = document.createElement("li");
//li.innerHTML = "Etiquetas";
//lista.appendChild(li);
//
//let lil = document.createElement("li");
//lil.innerHTML = "Etiquetas1";
//lista.appendChild(lil);
//root.appendChild(lista);
//
//root.appendChild(menu());

import { login } from "./src/components/sections/Login/Login.js";
let root = document.getElementById("root");
root.appendChild(login());