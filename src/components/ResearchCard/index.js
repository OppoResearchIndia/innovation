import './style.css'
import { Link } from 'react-router-dom'

const ResearchCard = ({id, image, title, publishedAt, description})=>{
    return(
        <>
        <div className="research-card-div">
            <div className="research-image">
            <Link to={`/research/${id}-${title.toLowerCase()}`}><img src={image} alt={title} /></Link>
            </div>
            <div className="research-title">
                <Link to={`/research/${id}-${title.toLowerCase()}`}>{title}</Link>
            </div>
            <div className="research-published">
                <h5><span>Published at: </span>{publishedAt}</h5>
            </div>
            <div className="research-description">
                <p>{description}</p>
                <Link to={`/research/${id}-${title.toLowerCase()}`}>Read more</Link>
            </div>
        </div>
        </>
    )
}
export default ResearchCard;