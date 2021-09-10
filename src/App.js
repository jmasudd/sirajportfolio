import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Project from "./pages/projects/Projects";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/project" component={Project} />
    </div>
  );
}

export default App;
