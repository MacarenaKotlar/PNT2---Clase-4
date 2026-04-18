let eliminarFoto = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos/1", {method: 'DELETE'});
        const data = await response.json();
        console.log(data);
        console.log("La foto fue eliminada correctamente");
        
    } catch (error) {
        console.error(error);
    }
}

eliminarFoto();