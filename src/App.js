import './App.css';
import Productos from './Productos';
import Redes from './Redes';
import Heraderimg from './Imagenes/pus.png';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='header-content'>
        <img src={Heraderimg} className='herader-img' alt="Producto destacado"/>
        <h1 className='header-titu'>Lux jewels</h1>
        </div>
      </header>
      <Productos />
      <Redes />
    </div>
  );
}

export default App;
