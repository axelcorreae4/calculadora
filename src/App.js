import './App.css';
import imgAxelLogo from './imagenes/axel-logo.jpg'

function App() {
  return (
    <div className='App'>
      <div className='contenedor-logo-axel'>
        <img 
        src={imgAxelLogo}
        className='logo-imagen'
        alt='Logo de Axel' />
      </div>
      <div className='contenedor-calculadora'>
        
      </div>
    </div>
  );
}

export default App;
