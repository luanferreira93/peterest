import { useEffect, useState } from "react"
import CatApi from "../../services/catApi"
import PetImg from "../../components/PetImg/PetCard"


export default function Cat() {

    const [randomCat, setRandomCat] = useState([]);

    useEffect(() => {

        async function Pet() {
            const catApi = new CatApi();
            const cat = await catApi.execute();

            let listCat = []

            cat.data.forEach(teste => {
                listCat.push(teste.url);
            })

            setRandomCat(listCat);
            
        }
        Pet();

    }, [])

   return(
       <PetImg listPet={randomCat} />
   )

}
