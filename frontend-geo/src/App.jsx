import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import AppRoutes from "./Components/AppRoutes.jsx"
import WA from "./Components/WA.jsx"

export default function App(){
  return(
    <BrowserRouter basename="/">
      <Navbar/>
            <AppRoutes/>
            <WA></WA>
            <Footer/>
    </BrowserRouter>
    
  );
}
