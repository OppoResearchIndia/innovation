import './style.css'

const ContactUsPage = ()=>{
    return(
        <>
        <div className="contactus-div">
            {/* <div className="contactus-img">
                <img src={ContactUsImg} alt="Contact Us" />
            </div> */}
            <div className="contactus-form">
                <h3>Leave a message</h3>
                <form>
                    <div className="name-div">
                        <div className="firstname-div input-field">
                            <label>First Name*</label>
                            <input type="text" placeholder='First Name' />
                        </div>
                        <div className="lastname-div input-field">
                            <label>Last Name*</label>
                            <input type="text" placeholder='Last Name' />
                        </div>
                    </div>
                    <div className="email-div input-field">
                        <label>Email Address*</label>
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="subject-div input-field">
                        <label>Subject*</label>
                        <input type="text" placeholder='Subject' />
                    </div>
                    <div className="message-div input-field">
                        <label>Message*</label>
                        <textarea placeholder='Message'/>
                    </div>
                    <button className='submit-btn'>Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default ContactUsPage;