import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer h1={"Planifica tu proximo viaje alrededor del "} span={"MUNDO!"}/>
    </div>
  )
}

export default App
