import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./components/navbar";
import NoTransitionExample from "./components/carousels";
import Basic from "./components/cards";
import Map from "./map";
import Lifecycle from "./lifecycle";
import Crud from "./crud";
import 'bootstrap/dist/css/bootstrap.min.css';

// import colm from './colm';

function App() {
  return (
    <div>
      {/* <BasicExample />
      <NoTransitionExample />
      <Basic /> 
      <Map /> */}
      <Lifecycle />
      <Crud/>
    </div>
  );
}

export default App;
