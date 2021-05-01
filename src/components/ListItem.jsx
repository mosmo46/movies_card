import {Link} from 'react-router-dom';

const ListItem =({image,name,rating,id}) => {
    return (
        <Link to={`/singleshow/${id}`} className="list-item">
            <img src={image} alt={name}/>
            <div className="list-item__info">
                <h4 className="info__name">{name}</h4>
                <h4 className="info__rating">{rating}</h4>
                
            </div>
        </Link>
    )
}

export default ListItem
