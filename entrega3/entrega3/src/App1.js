import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ListaProductos from './Components/Values/Values'
import ButtonCl from './Components/ButtonCl/ButtonCl'
import ButtonFc from './Components/ButtonFc/ButtonFc'
import Name from './Components/Name/Name'
import { NavBar } from './Components/NavBar/NavBar'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ButtonCl text={'SOY BOTON EN CLASE'} color={'red'} padding={'5px'} />
        <Name nombre='SD'/>
        <ButtonFc text={'SOY BOTON EN FC'} color={'blue'} padding={'15px'}>
          <h3>CHILD 1</h3>
        </ButtonFc>
      
      </header>
      <main>
      <ItemListContainer props = {ListaProductos()}/>  
        </main>
      
    </div>
  );
}

export default App;
