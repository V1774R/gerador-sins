import axios from 'axios'
const URL = "http://localhost:5005/certificados"

const buscarDados = async () => {
    try{
        const res = await axios.get(URL)
        //console.log(res.data)
        return res.data
    }catch(error){
        //console.log(error.message)
    }
    
}

export default {
    buscarDados
}