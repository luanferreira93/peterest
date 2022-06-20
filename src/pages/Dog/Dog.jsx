import { useEffect, useState } from "react";

import Loading from '../../components/Loading/Loading';

import ApiDog from "../../services/dogApi";
import PetImg from "../../components/PetImg/PetCard";

export default function Dog(){

    const[listDog,setListDog] = useState([]);

    const [spinnerLoading, spinnerSetLoading] = useState(true);


    useEffect(()=>{
        async function Pet(){
            const dogApi = new ApiDog();
            const dog = await dogApi.execute();

            setListDog(dog.data.message);
        }
        Pet();
        spinnerSetLoading(false);

    },[])

    if(spinnerLoading){
        return <Loading/>
    }

    return(
        <PetImg listPet={listDog} />
    )
}