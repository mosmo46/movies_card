import {useContext} from 'react'

//Context

import ShowsContext from '../context/shows/showsContext'


//components
import SearchBar from '../components/SearchBar'
import ListItem from '../components/ListItem'
import Loader from '../components/Loader'
const HomePage =()=> {


    const showsContext =useContext(ShowsContext)
    const {loading ,shows}= showsContext
    return (
        <div className="home-page">
            <SearchBar/>
            {loading ? <Loader/> :
            <div className="home-page__list"> 
                {shows.map(item=>(
                    <ListItem key={item.show.id}
                     id={item.show.id}  
                     image={item.show.image  ? item.show.image.medium : 'https://www.prokerala.com/movies/assets/img/no-poster-available.jpg'}
                     name={item.show.name}
                     rating={item.show.rating.average ? item.show.rating.average:'No rating'}
                     />
                ))}
            </div>
            }
        </div>
    )
}

export default HomePage
