import Button from "./components/Button.jsx";
import ComposantParents from "./components/ComposantParents.jsx";
import Inputs from "./components/Inputs.jsx";
import InputsSearch from "./components/InputsSearch.jsx";
import Meteo from "./components/Meteo.jsx";
import Notes from "./components/Notes.jsx";
import Tables from "./components/Tables.jsx";
import TimerSeconde from "./components/TimerSeconde.jsx";
import { PRODUCTS } from "./libs/products.jsx";





function App() {
  console.log(PRODUCTS);
  return (
    <>
      <div className="App">
        {/* <div>
          <h1>My React App!</h1>
          <p>
            This is a simple React app created using <code>create-react-app</code>.
          </p>
          <Button />
          <Inputs placeholder="Enter your name" />
          <TimerSeconde />
          <h1 className="text-3xl font-bold underline text-red-700">
            Hello world!
          </h1>

        </div>
        <ComposantParents /> */}
        {/* <InputsSearch placeholder="Search" value="" /> */}
        {/* <Tables data={PRODUCTS} /> */}
        {/* <Meteo /> */}
        <Notes />

      </div>
    </>
    
  );
}

export default App;
