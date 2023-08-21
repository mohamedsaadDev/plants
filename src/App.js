import './App.css';
import {BrowserRouter, Routes , Route} from "react-router-dom"
import NavigationBar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import Featured from './pages/Trending Products/Featured';
import Wishlist from './pages/wishlist/wishlist';
import Footer from "./components/Footer/Footer"
import Blog from './pages/Blog/Blog';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import ScrolleTop from './components/Scrolle Top/ScrolleTop';
import Prodects from './pages/prodect/Prodects';
import SingleProdect from './pages/SingleProdect/SingleProdect';
import AboutUs from './pages/About Us/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
const App= () => {
  return (
    <div className='Container-App'>
      <BrowserRouter>
        <NavigationBar/>
        <ScrolleTop/>
        <Routes>
          <Route path='/' element={<Home/>} >
            <Route path='/' element={<Featured/>}/>
            <Route path='Latest' element={<Featured/>}/>
            <Route path='Bestseller' element={ <Featured/>}/>
            <Route path='Special' element={ <Featured/>}/>
          </Route>
          <Route path='/wishlist' element={ <Wishlist/>}/>
          <Route path='/Blog' element={ <Blog/>}/>
          <Route path='/Blog/:id' element={ <SingleBlog/>}/>
          <Route path='/prodects' element={ <Prodects/>}/>
          <Route path='/prodects/:id' element={<SingleProdect/> }/>
          <Route path='/AboutUs' element={<AboutUs/> }/>
          <Route path='/ContactUs' element={<ContactUs/> }/>
          <Route path='/Login' element={<Login/> }/>
          <Route path='/Register' element={<Register/> }/>
        </Routes>
        <Footer />
      </BrowserRouter>  
    </div>
  );
}
export default App;
