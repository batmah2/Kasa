import housings from '../../data/housing.json';
import Card from '../Card/Card'

export default function CardList() {
    return(
        <div className='cardList'>
            {housings.map( housing => <Card housing={housing} key={housing.id} />)}
        </div>
    )
}