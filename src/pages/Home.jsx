import Banner from '../components/Banner/Banner'
import BannerImg from '../assets/BANNER.png'

export default function Home() {
    return (
        <Banner>
            <div className='banner-style'>
                <img src={BannerImg} alt=""/>
                <p>Chez vous, partout et ailleurs</p>
            </div>
        </Banner>       
    )
} 