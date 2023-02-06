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


  return (
    
    <div id="app">
      {page === "Home" && <Home init={init} setFunction={() => {
        setPage("Projects")
        setInit(false)
        }}/>}
      {page === "Projects" && <Projects setFunction={() => setPage("Home")}/>}
    </div>
  );
}

export default App;
