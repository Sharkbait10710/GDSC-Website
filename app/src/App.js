// Node imports
import * as React from "react"

// Page imports
import Home     from "./pages/Home"
import Projects from "./pages/Projects"

function App() {
  const [page, setPage] = React.useState(() => {
    return "Home"
  })

  const [init, setInit] = React.useState(() => {
    return true
  })

  setTimeout(() => setInit(false), 2000)
  const delay = 1
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

  var mediumWidth  = windowSize.innerWidth >= 900 && !bigWidth
  var bigWidth     = windowSize.innerWidth >= 1640
  var sizeWidth    = bigWidth ? 3 : mediumWidth ? 2 : 1

  var mediumHeight = windowSize.innerHeight >= 600 && !bigHeight
  var bigHeight    = windowSize.innerHeight >= 900
  var sizeHeight   = bigHeight ? 3 : mediumHeight ? 2 : 1

  return (
    
    <div id="app">
      {page === "Home" && <Home init={init} sizeWidth={sizeWidth} delay={delay} setFunction={() => {
        setPage("Projects")
        setInit(false)
        }}/>}
      {page === "Projects" && <Projects sizeWidth={sizeWidth} sizeHeight={sizeHeight} setFunction={() => setPage("Home")}/>}
    </div>
  );
}

export default App;
