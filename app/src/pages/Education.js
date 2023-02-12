// Node imports
import * as React           from "react"

// Component imports
import Navbar               from "../components/Education/Navbar"
import Body                 from "../components/Education/Body"      
import Footer               from "../components/Education/Footer"      

const Projects = (props) => {
    
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }}>

            <Navbar sizeWidth={props.sizeWidth} sizeHeight={props.sizeHeight} setFunction={props.setFunction}/>
            <Body sizeHeight={props.sizeHeight}/>
            <Footer />
        </div>
    )
}

export default Projects