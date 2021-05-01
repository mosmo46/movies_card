import {useState,useContext} from 'react' ;


//Context
import ShowsContext from '../context/shows/showsContext'
import AlertsContext from '../context/alerts/alertsContext'
//Components
import Alert from './Alert'
const SearchBar = () =>{

const [searchTerm, setSearchTerm] = useState("");

const showsContext =useContext(ShowsContext)
const {searchShow} = showsContext;

const {alert,setAlert} =useContext(AlertsContext)

const onSearchHandler = (e) =>{
e.preventDefault();


if(searchTerm === ""){
    setAlert("Please enter something" , "danger")
}
searchShow(searchTerm)

}
    return (
        <div className="search-bar">
           {alert ?  <Alert message={alert.message} type={alert.type}/> : null}
           
            <form className="search-form">
                <input type="text" placeholder="Search For TV Show"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <button className="btn btn-block" onClick={onSearchHandler}>SEARCH</button>
            </form>
        </div>
    )
}

export default SearchBar
