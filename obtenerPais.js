import axios from 'axios';
import https from "https";

function obtenerPais(name){
    const agent = new https.Agent({
  rejectUnauthorized: false
});
    axios.get(`https://restcountries.com/v3.1/name/${name}`, {
  httpsAgent: agent
}).then(res => console.log(res.data))
.catch(err => console.error(err));
}

export default obtenerPais;