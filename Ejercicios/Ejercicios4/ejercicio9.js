let mostrarTareas = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=3");
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error(error);
    }
}

mostrarTareas();