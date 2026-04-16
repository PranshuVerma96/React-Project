
import Users from "./componets/ax";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {BrowserRouter,Route,Routes ,Link} from "react-router-dom";


function App() {
  return (
    <>
    
{/* <div>
<nav>
  <Link to="/" >Home </Link>
  <Link to="/about" >about </Link>
  <Link to="/contact" >contact </Link>

</nav>

<Routes>
<Route path = '/' element = {<Home />}/>
<Route path = '/about' element = {<About/>}/>
<Route path = '/contact' element = {<Contact/>}/>

</Routes>
 



</div> */}
<Users/>

    </>
  );
}
export default App;
