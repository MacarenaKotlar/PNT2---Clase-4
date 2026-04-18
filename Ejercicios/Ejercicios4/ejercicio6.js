let mostrarComentarios = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=2");
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error(error);
    }
}

mostrarComentarios();