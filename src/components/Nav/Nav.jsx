import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import Pet from '../../img/paw.svg';
import Cat from '../../img/cat.svg';
import Dog from '../../img/dog.svg';
import Heart from '../../img/heart.svg';
import Info from '../../img/information.svg'

import './styles.css';
import { useEffect, useState } from 'react';

export default function Nav() {

  const [currentURL,setCurrentURL] = useState('')

  useEffect(()=>{
    const url = window.location.href;
    setCurrentURL(url)
  },[])

  console.log(currentURL);

  return (
      <nav>
        <ul>
          <li className='margin-bottom-25 svg-color'><Link to="/"><ReactSVG src={Pet} width={24} height={24} /></Link></li>
          <li className='margin-bottom-25'><Link to="/cats"><ReactSVG src={Cat} /></Link></li>
          <li><Link to="/dogs"><ReactSVG src={Dog} /></Link></li>
          <li className='icon-heart'><Link to="/favorites"><ReactSVG src={Heart} className='icon-heart' /></Link></li>
          <li><Link to="/info"><ReactSVG src={Info} /></Link></li>
        </ul>
      </nav>
  )
}