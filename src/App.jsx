import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <header>
        <NavBar>
          <CartWidget />
        </NavBar>
      </header>
      
      <main>
        <ItemListContainer backgroundColor="rgb(213, 0, 124)" width="100%">
          <h1>Este es el contenido dentro del ItemListContainer.</h1>
          <h2>Mi Aplicación</h2>
        </ItemListContainer>
      </main>
    </div>
  );
}

export default App;