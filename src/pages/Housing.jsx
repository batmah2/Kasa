import Slider from '../components/Slider/Slider'
import housingData from '../data/housing.json'
import Collapse from '../components/Collapse/Collapse'
import HousingDetails from '../components/HousingDetails/HousingDetails'

export default function Housing() {
    return (
        <div className="housing">
          {housingData.map((housing) => (
            <div className="housingWidth" key={housing.id}>
                <Slider pictures={housing.pictures} />
                <HousingDetails housing={housing}/>
                <div className='collapseHousing'>
                    <Collapse title="Description" description={housing.description} customClass="collapseHousingCustom"/>
                    <Collapse title="Équipements" description={housing.equipments} customClass="collapseHousingCustom"/>
                </div>                
            </div>
          ))}
        </div>
      );
    }