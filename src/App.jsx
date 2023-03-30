import { BrowserRouter, Routes, Route } from "react-router-dom"
import Breadcrumbs from "./components/Breadcrumbs/breadcrubm";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import AgregarCamiones from "./pages/AgregarCamiones";
import Titulo from "./components/Titulo";
import ListaCamiones from "./pages/ListaCamiones";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Navbar/>
            <Breadcrumbs />
            <Titulo/>
 
          <Routes>  
             <Route path="/login" element={<Login/>}/>
              <Route  path="/" element={<ListaCamiones/>}/>
              <Route path="/AgregarCamiones"element={<AgregarCamiones/>}/> 
              <Route element={<RequireAuth/>} > //si uso este route para envolver las rutas lista y agregar no las puedo ver las priba...
            </Route>
          </Routes> 
        
      
      </BrowserRouter>
    </div>
  );
}

export default App;
