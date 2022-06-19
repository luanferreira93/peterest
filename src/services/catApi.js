import axios from 'axios';

class CatApi{
    async execute(){
        const catApi =  await axios.get('https://api.thecatapi.com/v1/images/search?limit=20');
        return catApi;
    }
}


export default CatApi;