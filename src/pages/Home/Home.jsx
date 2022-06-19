import { useEffect, useState } from 'react';

import Loading from '../../components/Loading/Loading';

import PetImg from '../../components/PetImg/PetCard';

import DogApi from '../../services/dogApi';

import CatApi from '../../services/catApi';

import random from '../../utils/random';



export default function Home(){

    const [listPet, setListPet] = useState([]);

    const [spinnerLoading, setSpinnerLoading] = useState(true);

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


          setSpinnerLoading(false);
        }
        Pet()
      }, [])
  
    random(listPet);

    if(spinnerLoading){  
      return(
        <Loading/>
      )
    }

    return(
      <>
      <PetImg listPet={listPet}/>
      </>
    )
    
}