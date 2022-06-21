import { useEffect, useState } from "react"

import PetImg from "../../components/PetImg/PetCard";

import './styles.css';

export default function Favorites(){

    const [listPet,setListPet] = useState([]);

    useEffect(()=>{
         function Pet(){
            const listPet =  localStorage.getItem('@pets');
            const pets = JSON.parse(listPet) || [];
            setListPet(pets);
        }
        Pet();
    },[])



    return(
        <div className="favorites">
            <PetImg listPet={listPet} />
        </div>
    )
}