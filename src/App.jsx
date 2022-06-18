import { ReactSVG } from 'react-svg';
import axios from 'axios';

import Pets from './img/paw.svg';
import Cats from './img/cat.svg';
import Dogs from './img/dog.svg';
import Heart from './img/heart.svg';
import Info from './img/information.svg';
import { useEffect, useState } from 'react';

function App() {

  const [listDog, setListDog] = useState([]);

  const [listCat, setListCat] = useState([]);

  const url = window.location.href

  useEffect(() => {

    async function Pet() {
      const puppy = await axios.get('https://dog.ceo/api/breeds/image/random/10');
      const kitty = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');

      setListDog(puppy.data.message)

      setListCat(kitty.data);

    }

    Pet()
  }, [])



  //'https://cataas.com/cat?limit=10'

  //'https://dog.ceo/api/breeds/image/random/20'


  return (
    <div className="container">
      <div className="content">
        <nav>
          <ul>
            <li className='margin-bottom-25 svg-color'><a href="">
              <ReactSVG src={Pets} width={24} height={24} />
            </a></li>
            <li className='margin-bottom-25'><a href=""><ReactSVG src={Cats} /></a></li>
            <li><a href=""><ReactSVG src={Dogs} /></a></li>
            <li className='icon-heart'><a href=""><ReactSVG src={Heart} className='icon-heart' /></a></li>
            <li><a href=""><ReactSVG src={Info} /></a></li>
          </ul>
        </nav>
        <main >
          <div className="card-container" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 500 }'>
            {
              listDog.map(dogs=>{
                return <div className="img-container">
                <img src={dogs} className="grid-item" />
              </div>
              })
              
            }

            {
              listCat.map(cats=>{
                return <div className="img-container">
                 <img src={cats.url} className="grid-item" />
               </div>
               })
            }

          </div>
        </main>
      </div>
    </div>
  )
}

export default App

/*

 return <div className="img-container">
                  <img src={dogs} className="grid-item" />
                </div>

*/
