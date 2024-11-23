import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Error from './components/Error';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Planifica tu proximo viaje alrededor del "} span={"MUNDO"}/>}/>
          <Route path="/products/:category" element={<ItemListContainer greeting={"Bienvenidos a la categoria "} span={"MUNDO"}/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
      
  )
}

export default App
