import axios from "axios";

let eliminarPost = async () => {
    try {
        const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
        console.log(response.data);
        console.log("El post fue eliminado correctamente");
        
    } catch (error) {
        console.error(error);
    }
}

eliminarPost();