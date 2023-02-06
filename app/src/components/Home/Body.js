// Data
import homeData                     from "../../data/home.json"

// Custom
import Carousel                    from "../Carousel/Carousel"
const Body = (props) => {
    const delaytoShow = 1.5;

    const appear = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: delaytoShow,
                duration: 1
            }
        },
    }

    return(
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                height: "80vh",
                width: "80%"
            }}>
            <Carousel init={props.init} delaytoShow={delaytoShow} data={homeData}/>
        </div>
    )
}

export default Body;
