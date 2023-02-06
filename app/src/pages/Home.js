// Node imports
import * as React           from "react"

// Component imports
import Navbar               from "../components/Home/Navbar"
import Body                 from "../components/Home/Body"      
import Footer               from "../components/Home/Footer"      

// Image imports
import bgImg                from "../imgs/bgImg.jpg"

const Home = (props) => {

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
            <Navbar init={props.init} setFunction={props.setFunction}/>
            <Body />
            <Footer init={props.init}/>
        </div>
    )
}

export default Home