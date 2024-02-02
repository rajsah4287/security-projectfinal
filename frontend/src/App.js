import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutScreen from './screens/AboutScreen';
import AdminScreen from './screens/Adminscreen';
import BookingScreen from './screens/Bookingscreen';
import HomeScreen from './screens/Homescreen';
import LandingScreen from './screens/LandingScreen';
import Loginscreen from './screens/Loginscreen';
import PlaceScreen from './screens/Placescreen';
import ProfileScreen from './screens/Profilescreen';
import Registerscreen from './screens/Registerscreen';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>

          <Route path="/" exact element={<LandingScreen/>}/>
          <Route path="/home" exact element={<HomeScreen/>}/>
         
          <Route path="/rooms/:name" exact element={<PlaceScreen/>}/>
          <Route path="/register" exact element={<Registerscreen/>}/>
          <Route path="/login" exact element={<Loginscreen/>}/>
          <Route path="/profile" exact element={<ProfileScreen/>}/>
         
          <Route path="/admin" exact element={<AdminScreen/>}/>
          <Route path="/about" exact element={<AboutScreen/>}/>
          <Route path="/book/:id/:fromDate/:toDate" exact element={<BookingScreen/>}/>
          
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
