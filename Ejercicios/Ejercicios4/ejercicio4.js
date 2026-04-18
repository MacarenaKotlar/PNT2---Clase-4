let mostrarUsuario5 = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/5");
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error(error);
    }
}

mostrarUsuario5();