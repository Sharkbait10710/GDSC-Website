// React
import * as React                  from "react"
// Data
import homeData                     from "../../data/home.json"

// Custom
import Carousel                     from "../Carousel/Carousel"
const Body = (props) => {
    
    return(
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                top: "10%",
                height: "80vh",
                width: "80%"
            }}>
            <Carousel init={props.init} delaytoShow={props.delay} data={homeData} sizeWidth={props.sizeWidth} sizeHeight={props.sizeHeight}/>
        </div>
    )
}

export default Body;
