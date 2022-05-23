
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login';
import RequiredAuth from './Components/Authentication/RequireAuth';
import Signup from './Components/Authentication/Signup';
import Blogs from './Components/Blog/Blogs';
import Home from './Components/Home/Home';
import MyPortfolio from './Components/MyPortfolio';
import NotFound from './Components/NotFound';
import Purchase from './Components/Purchase/Purchase';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/purchase' element={<RequiredAuth><Purchase></Purchase></RequiredAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
