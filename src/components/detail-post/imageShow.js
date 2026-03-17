import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Apple from '../../utilities/image/apple.png';
import Avatar from '../../utilities/image/avatar.jpg';
const ImageShow = ({postDetail})=>{
  
  const {utilities, name} = postDetail;

  return (<div>
    <div className='imagesShow__title'>
      {name}
    </div>
    <Carousel axis='vertical' showIndicators={false} showStatus={false} dynamicHeight={true}>
      {utilities.map((utility)=>
          <div style={{height:'390px'}}>
              <img src={utility} height="100%"/>
          </div>
      )}
    </Carousel>
  </div>)
}

export default ImageShow;