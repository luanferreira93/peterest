import { ReactSVG } from 'react-svg';

import Heart from '../../img/heart.svg';
import Download from '../../img/down.svg';

import './styles.css';
import { useState } from 'react';

export default function PetImg({ listPet }) {

    const [list,setList] = useState([])

    const [textButton, setTextButton] = useState('Salvar');

    function favoritePet(pet){
        const save = list.some(pets=>{
            return pets === pet
        })
        
        if(save){
            alert('pet já salvo!.')
            return
        }
        
        setList([...list,pet]);
    }
    
    localStorage.setItem('@pets',JSON.stringify(list));
    console.log(list);

    return (
        <main>
            {
                listPet.map(pet => {
                    return (
                        <div className="img-container">
                            <div className="button-container">
                                <button onClick={()=>favoritePet(pet)}>{textButton}</button>
                            </div>
                            <img src={pet} />
                        </div>
                    )
                })
            }
        </main>

    )

}