import Banner from '../components/Banner/Banner';
import BannerImg from '../assets/BANNER-About.png';
import CollapseData from '../data/info.json';
import Collapse from '../components/Collapse/Collapse';

export default function About() {
    return (
        <div className='aboutContent'>
            <Banner>
                <div className='banner-style'>
                    <img src={BannerImg} alt=""/>
                </div>
            </Banner>
            <div className='collapseContainer'>
                {CollapseData.map((Collapses) => (
                    <Collapse
                        key={Collapses.id}
                        title={Collapses.title}
                        description={Collapses.description}
                    />                  
                ))}                
            </div>
        </div>
    )
} 