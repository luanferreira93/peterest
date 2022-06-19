import { useEffect, useState } from "react"

import Loading from '../../components/Loading/Loading';

import CatApi from "../../services/catApi"
import PetImg from "../../components/PetImg/PetCard"


export default function Cat() {

    const [randomCat, setRandomCat] = useState([]);

    const [spinnerLoading, spinnerSetLoading] = useState(true);

    useEffect(() => {

        async function Pet() {
            const catApi = new CatApi();
            const cat = await catApi.execute();

            let listCat = []

            cat.data.forEach(teste => {
                listCat.push(teste.url);
            })

            setRandomCat(listCat);
            spinnerSetLoading(false);
        }
        Pet();

    }, [])

    if(spinnerLoading){
        return <Loading/>
    }

   return(
       <PetImg listPet={randomCat} />
   )

}
