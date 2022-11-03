import AboutContent from "../../components/AboutContent";
import PageHeader from "../../components/PageHeader";

const AboutUs = ()=>{
    return(
        <>
        <PageHeader heading={"About Us"} classname = {"about-header-div"}/>
        <AboutContent/>
        </>
    )
}
export default AboutUs;