import { useState } from 'react';
import './styles.css';

export default function PetImg({ listPet }) {

    const [textButton, setTextButton] = useState('Salvar');

    function favoritePet(pet) {

        const petSave = localStorage.getItem('@pets');

        const petList = JSON.parse(petSave) || [];

        const save = petList.some(pets => pets === pet)
        
        if (save) {
            setTextButton('Salvo');
            return
        }

        petList.push(pet);
        localStorage.setItem('@pets', JSON.stringify(petList));
    }

    return (
        <main>
            {
                listPet.map(pet => {
                    return (
                        <div className="img-container">
                            <div className="button-container" onClick={(e) => {
                                e.target.className = 'salvo';
                                e.target.textContent = 'Salvo';
                                favoritePet(pet)
                            }}>
                                <button>{textButton}</button>
                            </div>
                            <img src={pet} />
                        </div>
                    )
                })
            }
        </main>

    )

}