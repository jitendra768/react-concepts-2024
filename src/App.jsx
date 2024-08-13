import "./App.css";
import ClassBaseComponent from "./Components/Class_BasedComponent";
import FunctionalComponenet from "./Components/Functional_Component";
import Counter from "./Components/Hooks/UseStateHook";
import ProductList from "./Components/Products/Index";


const dummyProductData = ['Product1','product2','Product3'];

function App() {
  return (
    <>
    <h1>React js concepts 2024</h1>
       {/* <ClassBaseComponent /> */}
      {/* <FunctionalComponenet/> */}
      {/* <ProductList productList={dummyProductData} name="Jitendra" city="Delhi" /> */}
      <Counter/>
    </>
  );
}

export default App;
