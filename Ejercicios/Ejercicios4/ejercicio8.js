import axios from "axios";

let mostrarDatosClima = async () => {
    try {
        const response = await axios.get("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=f70284cd2db7d2f4a4d833ef7bdeb0d5");
        console.log(response.data);
        
    } catch (error) {
        console.error(error);
    }
}

mostrarDatosClima();