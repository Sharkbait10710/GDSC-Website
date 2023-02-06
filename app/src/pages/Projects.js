// Node imports
import * as React           from "react"

// Component imports
import Navbar               from "../components/Projects/Navbar"
import Body                 from "../components/Projects/Body"      
import Footer               from "../components/Projects/Footer"      

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

            <Navbar setFunction={props.setFunction}/>
            <Body />
            <Footer />
        </div>
    )
}

export default Projects