import { useEffect, useState } from 'react';

import PetImg from '../../components/PetImg/PetCard';

import DogApi from '../../services/dogApi';

import CatApi from '../../services/catApi';


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
    
      let randomNumber;
      let tmp;
    
      for (let i = listPet.length; i;) {
        randomNumber = Math.random() * i-- | 0;
        tmp = listPet[randomNumber];
        listPet[randomNumber] = listPet[i];
        listPet[i] = tmp;
      }

    return(
      <PetImg listPet={listPet}/>
    )
    
}