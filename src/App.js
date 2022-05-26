
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './Components/Authentication/Login';
import RequireAdmin from './Components/Authentication/RequireAdmin';
import RequiredAuth from './Components/Authentication/RequireAuth';
import Signup from './Components/Authentication/Signup';
import Blogs from './Components/Blog/Blogs';
import Home from './Components/Home/Home';
import Reviews from './Components/Home/Reviews';
import MyPortfolio from './Components/MyPortfolio';
import NotFound from './Components/NotFound';
import Purchase from './Components/Purchase/Purchase';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';
import AddProduct from './Hooks/Dashboard/AddProduct';
import AddReview from './Hooks/Dashboard/AddReview';
import AllItems from './Hooks/Dashboard/AllItems';
import AllUsers from './Hooks/Dashboard/AllUsers';
import Dashboard from './Hooks/Dashboard/Dashboard';
import DashboardItem from './Hooks/Dashboard/DashboardItem';
import ManageAllOrders from './Hooks/Dashboard/ManageAllOrders';
import MyOreders from './Hooks/Dashboard/MyOreders';
import MyProfile from './Hooks/Dashboard/MyProfile';
import Payement from './Hooks/Dashboard/Payement';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/review' element={<Reviews></Reviews>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/dashboard' element={<RequiredAuth><Dashboard /></RequiredAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOreders></MyOreders>}></Route>
          <Route path='payment/:id' element={<Payement></Payement>}></Route>
          <Route path='allitem' element={<RequireAdmin><AllItems></AllItems></RequireAdmin>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageallorders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='allusers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
        </Route>
        <Route path='/purchase/:toolID' element={<RequiredAuth><Purchase></Purchase></RequiredAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
