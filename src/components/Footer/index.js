import './style.css'

const Footer = ()=>{
    return(
        <>
        <div className='footer-div'>
            <div className='footer-logo'>
                <h1>OPLUS</h1>
            </div>
            <div className='footer-details'>
                {/* <p>innovation@oppo.com</p> */}
                <a href = "mailto: innovation@oppo.com">innovation@oppo.com</a>
                <address>Building Number 9, 5th floor, mindspace, Vittal Rao Nagar, HITEC City, Hyderabad, Telangana 500081</address>
            </div>
        </div>
        </>
    )
}
export default Footer;