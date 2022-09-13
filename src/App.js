
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import RestaurantDetails from './components/RestaurantDetails';
function App() {
  return (
    <>
    
       <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurant/:id' element={<RestaurantDetails/>}/>
      </Routes>
       <Footer/>
    
    </>
  );
}

export default App;

//react-router-dom is a library used for routing purpose