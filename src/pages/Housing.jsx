import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from '../components/Slider/Slider'
import housingData from '../data/housing.json'
import Collapse from '../components/Collapse/Collapse'
import HousingDetails from '../components/HousingDetails/HousingDetails'

export default function Housing() {
  const navigate = useNavigate();
  const { id } = useParams();
  const housing = housingData.find((housing) => housing.id === id);

  useEffect(() => {
    if (!housing) {
      return navigate("/404");
    }
  }, [housing, navigate]);

  if (!housing) { return null; }
    return (
        <div className="housing">          
            <div className="housingWidth" key={housing.id}>
                <Slider pictures={housing.pictures} />
                <HousingDetails housing={housing}/>
                <div className='collapseHousing'>
                    <Collapse title="Description" description={housing.description} customClass="collapseHousingCustom"/>
                    <Collapse title="Équipements" description={housing.equipments} customClass="collapseHousingCustom"/>
                </div>                
            </div>          
        </div>
      );
    }