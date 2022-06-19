import { useEffect, useState } from "react";
import ApiDog from "../../services/dogApi";
import PetImg from "../../components/PetImg/PetCard";

export default function Dog(){

    const[listDog,setListDog] = useState([]);

    useEffect(()=>{

        async function Pet(){
            const dogApi = new ApiDog();
            const dog = await dogApi.execute();

            setListDog(dog.data.message);
        }

        Pet();

    },[])

    return(
        <PetImg listPet={listDog} />
    )
}