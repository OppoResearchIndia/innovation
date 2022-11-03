import './style.css'

const PageHeader = ({heading,classname})=>{
    return(
        <>
            <div className={classname}>
                <h1>{heading}</h1>
            </div>
        </>
    )
}
export default PageHeader;