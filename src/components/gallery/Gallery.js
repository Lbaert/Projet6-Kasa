import './gallery.scss'
import Card from '../card/Card'
import { logementList } from '../../data/data'

export default function Gallery() {

    return (
        <main className="gallery">
            <h2 className='hidden'>Nos appartements</h2>
            <div className='card'>
                    {logementList.map((Logement) => (
                            <Card 
                                key={Logement.id}
                                id={Logement.id}
                                title={Logement.title}
                                img={Logement.cover}
                            />
                            ))
                    }
            </div>
        </main>
    )
}