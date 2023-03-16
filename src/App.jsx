import { BrowserRouter, Routes, Route } from "react-router-dom"
import Breadcrumbs from "./components/Breadcrumbs/breadcrubm";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import AgregarCamiones from "./pages/AgregarCamiones";
import Titulo from "./components/Titulo";
import ListaCamiones from "./pages/ListaCamiones";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Navbar/>
            <Breadcrumbs />
            
            <Titulo/>
          <Routes>
            <Route 
              path="/"
              element={<ListaCamiones/>} />

              <Route 
              path="/login"
              element={<Login/>}  />

              <Route 
              path="/AgregarCamiones"
              element={<AgregarCamiones/>}  />
          </Routes>
        
      
      </BrowserRouter>
    </div>
  );
}

export default App;
