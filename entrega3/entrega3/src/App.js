import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ListaProductos from './Components/Values/Values'
import { NavBar } from './Components/NavBar/NavBar'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />


      
      </header>
      <main>
      <ItemListContainer props = {ListaProductos()}/>  
        </main>
      
    </div>
  );
}

export default App;
