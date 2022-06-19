import Lottie from 'lottie-react';

import loading from '../../animation/spinner-loading.json';

import './styles.css';

export default function Loading(){
    return(
        <div className='loading-container'>
        <Lottie className='loading-spinner' animationData={loading} loop={true} autoPlay={true} />
      </div>
      )
}