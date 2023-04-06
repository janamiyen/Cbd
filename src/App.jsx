import Navbar from './components/Navbar';
import Products from './pages/Products';
import Home from './pages/Home';
import './index.css';

function App() {

  return (
    <>
      <Navbar />
      <Home />
  <h2>Productos destacados</h2>
      <Products/>
    </>
  );
}
export default App
