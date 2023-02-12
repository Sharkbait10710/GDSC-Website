// Node imports
import * as React           from "react"

// Component imports
import Navbar               from "../components/Home/Navbar"
import Body                 from "../components/Home/Body"      
import Footer               from "../components/Home/Footer"      

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
            <Navbar init={props.init} 
                sizeWidth={props.sizeWidth} 
                sizeHeight={props.sizeHeight} 
                setProject={props.setProject}
                setJoinus={props.setJoinus}
                setEducation={props.setEducation}
                setMeetup={props.setMeetup}/>
            <Body init={props.init} sizeWidth={props.sizeWidth} sizeHeight={props.sizeHeight} delay={props.delay}/>
            {props.sizeWidth != 1 && <Footer init={props.init}/>}
        </div>
    )
}

export default Home