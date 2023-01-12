import axios from "axios"

//https://viacep.com.br/ws/ 01310930/json/

/*  baseURL é um caminho ou uma url que NUNCA irá mudar,
    até o ws/ é a baseURL, após isso a url sera dinamica
    de acordo com a requisição ( rota )
*/
 const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})


export default api;