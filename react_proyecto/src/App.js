import logo from './logo.png';
import './App.css';

function App() {
  return (<>
        <header>
        <h1>amazon</h1>
        <input type="text" class = "nav-search-input" placeholder="¿Qué estás buscando hoy?"></input>
    </header>
    <div class="nav-header-plus-menu-wrapper">
        <nav class="navbar">
        <ul>
            <li><a href="#">Los más vendidos</a></li>
            <li><a href="#">Ofertas</a></li>
            <li><a href="pagos.html">pagos</a></li>
        </ul>
    </nav>
        <nav class="nav-header-menu">
            <ul class = "nav-header-menu-list">
                <li>Crear cuenta</li>
                <li>Login</li>
            </ul>
        </nav>
    </div>
  </>

  );
}

export default App;
