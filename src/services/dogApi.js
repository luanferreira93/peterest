import axios from 'axios';

 class ApiDog{
    async execute(){
        const apiDog = await axios.get('https://dog.ceo/api/breeds/image/random/20');
        return apiDog;
    }
 
}


export default ApiDog;