import './style.css'

const OpenPosition=({position, team, link, location, postedOn, description})=>{
    return(
        <div className="position-div">
            <div className="position-header">
                <div className='position'><h2><a href= {link} target="_blank" rel="noopener noreferrer">{position}</a></h2></div>
                <div className='posted'>Posted : {postedOn}</div>
            </div>
            <div className="team-div">
                {team} | {location}
            </div>
            <div className="description-div">
                <p>{description} <br /> <a href= {link} target="_blank" rel="noopener noreferrer">Read more</a></p>
            </div>
        </div>
    )
}
export default OpenPosition;