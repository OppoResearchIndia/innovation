// import { useEffect, useState } from 'react';
import './style.css'

const IntroText = ()=>{
    // const [offSetY, setOffSetY] = useState(0);
    // const handleScroll = () => setOffSetY(window.pageYOffset)
    // useEffect(()=>{
    //     window.addEventListener("scroll", handleScroll)

    //     return ()=> window.removeEventListener("scroll", handleScroll);
    // },[])
    return(
        <div className='introTextDiv'>
            {/* <div style={{transform : `translateY(-${offSetY*0.5}px)`}}><span className='O'>O</span><span>plus</span></div> */}
            {/* <h1 style={{transform : `translateY(-${offSetY*0.4}px)`}}>INNOVATION TEAM</h1>
            <p style={{transform : `translateY(-${offSetY*0.2}px)`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sapien, consequat ac ligula vel, semper convallis massa.</p> */}
            <h1>INNOVATION TEAM</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sapien, consequat ac ligula vel, semper convallis massa.</p>
        </div>
    )
}

export default IntroText