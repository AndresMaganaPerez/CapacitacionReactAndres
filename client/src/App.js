import './App.css';
import Form from "./pages/Form";
import DishRestaurant from "./pages/DishRestaurant";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Form/> }/>
          <Route path="/dish-restaurant" element={ <DishRestaurant/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
