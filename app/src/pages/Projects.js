// Node imports
import * as React           from "react"

// Component imports
import Navbar               from "../components/Projects/Navbar"
import Body                 from "../components/Projects/Body"      
import Footer               from "../components/Projects/Footer"      

// Image imports
import bgImg                from "../imgs/bgImg.jpg"
const Projects = () => {
    
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
            <img 
                style={{
                    width: "100vw",
                    position: 'absolute',
                    opacity: 0.2
                }}
                src={bgImg}/>
            <Navbar />
            <Body />
            <Footer />
        </div>
    )
}

export default Projects