// React
import * as React                  from "react"
// Data
import homeData                     from "../../data/home.json"

// Custom
import Carousel                     from "../Carousel/Carousel"
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
    
    const [windowSize, setWindowSize] = React.useState(getWindowSize());

    React.useEffect(() => {
        function handleWindowResize() {
        setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
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
            {windowSize.innerWidth >= 1300 && windowSize.innerHeight > 850 && <Carousel init={props.init} delaytoShow={delaytoShow} data={homeData}/>}
        </div>
    )
}

export default Body;
