import axios from "axios";

let eliminarTODO = async () => {
    try {
        const response = await axios.delete("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data);
        console.log("El TO-DO fue eliminado correctamente");
        
    } catch (error) {
        console.error(error);
    }
}

eliminarTODO();