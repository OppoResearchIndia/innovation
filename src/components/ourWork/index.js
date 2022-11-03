import './style.css'
import Card from "../Card";
import IntroText from '../IntroText';



// To change the cover image of the cards, First crop the image in ratio of 16:9 and then place the image in the Images folder(Which is present in scr folder), after that change the import statement according to the new image

import img1 from '../../Images/research.jpg'
import img2 from '../../Images/institute-collab.jpg'
import img3 from '../../Images/start-up.jpg'

const CardData = [

    {
        "title":"Research",
        "image": {img1},
        "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sapien, consequat ac ligula vel, semper convallis massa. Lorem ipsum dolor sit amet."
    },
    {
        "title":"Institute Collabration",
        "image": {img2},
        "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sapien, consequat ac ligula vel, semper convallis massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sapien, consequat ac ligula vel, semper convallis massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sapien, consequat ac ligula vel, semper convallis massa."
    },
    {
        "title":"Start-ups",
        "image": {img3},
        "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sapien, consequat ac ligula vel, semper convallis massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sapien, consequat ac ligula vel, semper convallis massa. "
    }
]

const OurWork = ()=>{
    return(
        <>
        <IntroText/>
        <div className="ourWork-container">
                <div className='heading-div'>
                    <div>
                        <h1>OUR</h1>
                        <h1>WORK</h1>
                        <p>Current Projects</p>
                    </div>
                </div>
                    {CardData?.map((data)=>
                        <div className='allCards-container'>
                            <Card title={data.title} discription = {data.discription} image = {data.image} />
                        </div>
                    )}
        </div>
        </>
    )
}
export default OurWork;