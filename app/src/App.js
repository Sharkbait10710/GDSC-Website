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
