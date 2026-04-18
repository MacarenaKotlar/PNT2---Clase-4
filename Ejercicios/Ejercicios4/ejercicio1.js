import axios from "axios";

let obtenerTitulos = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        const objetos = data.slice(0, 10);

        objetos.forEach(objeto => {
            console.log(`Título del objeto con id ${objeto.id}: ${objeto.title}`);
        });

    } catch (error) {
        console.error(error);
    }
}

obtenerTitulos();
