import { useEffect, useState } from 'react'
import IntroText from '../IntroText'
import './style.css'

import bulb from '../../Images/bulb.png'
import laptop from '../../Images/laptop.png'
import mobile from '../../Images/mobile.png'
import person from '../../Images/person.png'
import robo from '../../Images/robo.png'

const HeroSection = ()=>{
    const [offSetY, setOffSetY] = useState(0);
    const handleScroll = () => setOffSetY(window.pageYOffset)
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)

        return ()=> window.removeEventListener("scroll", handleScroll);
    },[])
    return(
        <>
        <div className='heroDiv'>
            <IntroText/>
            <div className='heroimage-container'>
                <div className='bulb-container img-div' style={{transform : `translateY(-${offSetY*0.1}px)`}}>
                    <img src={bulb} alt="bulb"/>
                </div>
                <div className='laptop-container img-div' style={{transform : `translateY(-${offSetY*0.4}px)`}}>
                    <img src={laptop} alt="laptop"/>
                </div>
                <div className='person-container img-div' style={{transform : `translateY(-${offSetY*0.2}px)`}}>
                    <img src={person} alt="person"/>
                </div>
                <div className='robo-container img-div' style={{transform : `translateY(-${offSetY*0.6}px)`}}>
                    <img src={robo} alt="robo"/>
                </div>
                <div className='mobile-container img-div' style={{transform : `translateY(-${offSetY*0.3}px)`}}>
                    <img src={mobile} alt="mobile"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default HeroSection