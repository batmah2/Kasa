import { useState } from 'react';
import arrowLeft from '../../assets/Arrow-left.png';
import arrowRight from '../../assets/Arrow-right.png';

export default function Slider({ pictures }) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const goToPreviousPicture = () => {
    setCurrentPictureIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  const goToNextPicture = () => {
    setCurrentPictureIndex((prevIndex) => (prevIndex + 1 + pictures.length) % pictures.length);
  };

  const currentImageNumber = currentPictureIndex + 1;
  const totalImages = pictures.length;
  if (totalImages === 1) {
    return (
      <div className="slider">
        <div className='imageContainer'>
          <img className='accomodation' src={pictures[0]} alt="accommodation 1" />
        </div>
      </div>
    );
  }

  return (
    <div className="slider">
      <div className='imageContainer'>
        <img className='accomodation' src={pictures[currentPictureIndex]} alt={`accomodation ${currentPictureIndex + 1}`} />
        { totalImages > 1 && <span className="imageCounter">{`${currentImageNumber}/${totalImages}`}</span> }
      </div>
      { totalImages > 1  && <div className='sliderButton'>
        <img src={arrowLeft} alt="Previous" onClick={goToPreviousPicture} className="sliderBtn prev"/>
        <img src={arrowRight} alt="Next"  onClick={goToNextPicture} className="sliderBtn next"/>
      </div>
      }
    </div>
  );
}