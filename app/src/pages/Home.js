// Node imports
import * as React           from "react"
import { Route, Switch }    from "react-router-dom"
import motion               from "framer-motion"

// Component imports
import Navbar               from "../components/Home/Navbar"
import Body                 from "../components/Home/Body"      
import Footer               from "../components/Home/Footer"      

// Image imports
import logo                 from "../imgs/GDSC_Logo.png"
const Home = () => {
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

            <Navbar />
            <Body />
            <Footer />
        </div>
    )
}

export default Home