import './style.css'
import bulb from '../../Images/bulb.png'
import laptop from '../../Images/laptop.png'
import mobile from '../../Images/mobile.png'
import person from '../../Images/person.png'
import robo from '../../Images/robo.png'

const HeroImage = ()=>{
    <div className='heroimage-container'>
        Hi
        <div className='bulb-container'>
            <img src={bulb} alt="bulb"/>
        </div>
        <div className='laptop-container'>
            <img src={laptop} alt="laptop"/>
        </div>
        <div className='person-container'>
            <img src={person} alt="person"/>
        </div>
        <div className='robo-container'>
            <img src={robo} alt="robo"/>
        </div>
        <div className='mobile-container'>
            <img src={mobile} alt="mobile"/>
        </div>
    </div>
}
export default HeroImage