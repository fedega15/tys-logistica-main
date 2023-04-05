import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login";
import AgregarCamiones from "./pages/AgregarCamiones";
import ListaCamiones from "./pages/ListaCamiones";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/login" element={<Layout title="Login"><Login/></Layout>}/>
        <Route path="/" element={<PrivateRoute><Layout title="Lista de Camiones"><ListaCamiones/></Layout></PrivateRoute>}/>
        <Route path="/AgregarCamiones" element={<PrivateRoute><Layout title="Agregar Camiones"><AgregarCamiones/></Layout></PrivateRoute>}/> 
      </Routes> 
    </BrowserRouter>
  )
}
export default App