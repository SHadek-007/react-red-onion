import './App.css';
import Header from './components/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home/Home';
import SignIn from './components/Login/SignIn/SignIn';
import SignUp from './components/Login/SignUp/SignUp';
import Breakfast from './components/Pages/Home/Breakfast/Breakfast';
import Launch from './components/Pages/Home/Launch/Launch';
import Dinner from './components/Pages/Home/Dinner/Dinner';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        <Route index element={<Breakfast></Breakfast>}></Route>
        <Route path='launch' element={<Launch></Launch>}></Route>
        <Route path='dinner' element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
