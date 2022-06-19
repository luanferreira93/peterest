import { useEffect, useState } from 'react';

import PetImg from '../../components/PetImg/PetCard';

import DogApi from '../../services/dogApi';

import CatApi from '../../services/catApi';

import random from '../../utils/random';


export default function Home(){

    const [listPet, setListPet] = useState([]);


    useEffect(() => {

        async function Pet() {
    
          const catApi = new CatApi();
          const cat = await catApi.execute();
    
          let listCat = []
          cat.data.forEach(teste => {
            listCat.push(teste.url);
          })
    
          const dogApi = new DogApi();
          const dog = await dogApi.execute();
          let listDog = dog.data.message;
    
          setListPet([...listCat, ...listDog]);
    
        }
    
        Pet()
      }, [])
  
    random(listPet);

    return(
      <PetImg listPet={listPet}/>
    )
    
}