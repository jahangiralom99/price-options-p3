import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PriceOPtions from "./components/PriceOptions/PriceOPtions";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <h1 className="text-center text-5xl font-bold">Price Options</h1>
      <PriceOPtions></PriceOPtions>
    </>
  );
}

export default App;
