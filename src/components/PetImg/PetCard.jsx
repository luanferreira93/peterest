import { ReactSVG } from 'react-svg';

import Heart from '../../img/heart-outline.svg';
import Download from '../../img/down.svg';

import './styles.css';

export default function PetImg({ listPet }) {
    return (
        <main>
            {
                listPet.map(pet => {
                    return (
                        <div className="img-container">
                            <div className="button-container">
                                <div className="buttons">
                                <ReactSVG src={Download} className="down" />
                                <ReactSVG src={Heart} className="heart" />
                                </div>
                            </div>
                            <img src={pet} />
                        </div>
                    )
                })
            }
        </main>

    )

}