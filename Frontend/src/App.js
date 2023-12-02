import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Account from './pages/Account'
import Erick from './pages/Erick'
import Santiago from './pages/Santiago'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import ProductGallery from './pages/ProductGallery';
import ChangePasswordByEmail from './pages/ChangePasswordByEmail'


function App() {
  const isUserSignedIn = !!localStorage.getItem('token')

  return (
    <div className="justify-center flex-col justify-items-center ">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/change-password-by-email' element={<ChangePasswordByEmail />} />
        <Route path='/ProductGallery' element={<ProductGallery />} />
        <Route path='/cart' element={<Cart />} />
        {isUserSignedIn && <Route path='/account' element={<Account />} />}
        <Route path='/erick' element={<Erick />} />
        <Route path='/santiago' element={<Santiago />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
