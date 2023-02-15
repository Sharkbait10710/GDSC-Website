// Node imports
import * as React           from "react"

// Component imports
import Navbar               from "../components/Meetup/Navbar"
import Body                 from "../components/Meetup/Body"      
import Footer               from "../components/Meetup/Footer"      

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