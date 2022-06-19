import { ReactSVG } from 'react-svg';
import {Link} from 'react-router-dom';

import Pet from '../../img/paw.svg';
import Cat from '../../img/cat.svg';
import Dog from '../../img/dog.svg';
import Heart from '../../img/heart.svg';
import Info from '../../img/information.svg'

import './styles.css';

export default function Nav(){
    return(
        <nav>
        <ul>
          <li className='margin-bottom-25 svg-color'><a href=""><ReactSVG src={Pet} width={24} height={24} /></a></li>
          <li className='margin-bottom-25'><a href=""><ReactSVG src={Cat} /></a></li>
          <li><a href=""><ReactSVG src={Dog} /></a></li>
          <li className='icon-heart'><a href=""><ReactSVG src={Heart} className='icon-heart' /></a></li>
          <li><a href=""><ReactSVG src={Info} /></a></li>
        </ul>
      </nav>
    )
}