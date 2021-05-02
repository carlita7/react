import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemListContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/item/:id" exact component={ItemDetailContainer} />
        <Route path="/category/:categoryId" exact component={ItemListContainer} />
        <Route path="/" component={ItemListContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
