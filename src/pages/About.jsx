import Banner from '../components/Banner/Banner'
import BannerImg from '../assets/BANNER-About.png'

export default function Home() {
    return (
        <Banner>
            <div className='banner-style'>
                <img src={BannerImg} alt=""/>
            </div>
        </Banner>       
    )
} 