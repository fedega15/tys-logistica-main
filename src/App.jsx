import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AgregarCamiones from "./pages/AgregarCamiones";
import ListaCamiones from "./pages/ListaCamiones";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import Registro from "./pages/Registro";
import CrearChofer from "./pages/CrearChofer";
import Choferes from "./pages/Choferes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <Layout title="Login">
              <Login />
            </Layout>
          }
        />
        <Route
          path="/Registro"
          element={
            <Layout title="Registro">
              <Registro />
            </Layout>
          }
        />
        <Route
          path="/AgregarCamiones"
          element={
            <PrivateRoute>
              <Layout title="Agregar Camiones">
                <AgregarCamiones />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout title="Lista de Camiones">
                <ListaCamiones />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/CrearChofer"
          element={
            <PrivateRoute>
              <Layout title="Choferes">
                <CrearChofer />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/Choferes"
          element={
            <PrivateRoute>
              <Layout title="Choferes">
                <Choferes />
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;