import Navbar from './components/Navbar'
import ItemSection from './components/ItemSection';
import Cart from './components/Cart'
import { Route, Routes } from 'react-router-dom'

function App() {
  const pathWay = '/cart'
  const showCart = ""
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<ItemSection />}></Route>
            <Route path= {pathWay} element={<Cart />}></Route>
        </Routes>
    </div>
    
  );
}

export default App;
