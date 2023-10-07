import fullStar from '../../assets/FilledStar.png'
import emptyStar from '../../assets/EmptyStar.png'


function getFirstName(fullName) {
    const parts = fullName.split(' ');
    return parts[0];
  }
  
  function getLastName(fullName) {
    const parts = fullName.split(' ');
    return parts[1];
  }

  export default function HousingDetails({ housing }) {
    const fullStars = Array(Number(housing.rating)).fill(null);
    const emptyStars = Array(5 - Number(housing.rating)).fill(null);
  
    return (
      <div className='housingContent'>
        <div className='housingLocation'>
          <h1>{housing.title}</h1>
          <p>{housing.location}</p>
          <div className='housingTags'>
            {housing.tags.map((tag, index) => (
              <div className='tags' key={index}>{tag}</div>
            ))}
          </div>
        </div>
        <div className='housingHost'>
          <img className='hostPicture' src={housing.host.picture} alt='host' />
          <p className='hostName'>
            <span className='firstName'>{getFirstName(housing.host.name)}</span>
            <span className='lastName'>{getLastName(housing.host.name)}</span>
          </p>
          <div className='starContainer'>
          {[...fullStars, ...emptyStars].map((_, i) => (
            <div className='star' key={`Star_${i}`}>
              <img alt='img' src={i < fullStars.length ? fullStar : emptyStar} />
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }