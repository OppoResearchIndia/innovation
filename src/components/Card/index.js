import './style.css'

const Card = ({title,discription,image}) =>{
    if(image.img1!=null){
        image = image.img1;
    }else if(image.img2!=null){
        image = image.img2;
    }else{
        image = image.img3;
    }
    return(
        <div className="card-container">
            <div className="img-container">
                <img src={image} alt="ResearchImage" />
            </div>
            <div className='content-container'>
                <div className='title-container'>
                    <h2>{title}</h2>
                </div>
                <div className='body-container'>
                    <p>{discription}</p>
                </div>
                <div className='footer-container'>
                    <button>  {'>'} Find out more</button>
                </div>
            </div>
        </div>
    )
}

export default Card