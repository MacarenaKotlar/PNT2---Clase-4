import axios from "axios";

let mostrarAlbumes = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/albums?userId=1");
        console.log(response.data);
        
    } catch (error) {
        console.error(error);
    }
}

mostrarAlbumes();