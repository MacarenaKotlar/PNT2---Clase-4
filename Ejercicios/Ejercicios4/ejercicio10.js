let obtenerArticulos = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = response.json();
            resolve(data);
            
        } catch (error) {
            reject(error);
        }
    });
}

obtenerArticulos()
    .then(data => console.log(data))
    .catch(error => console.error(error));