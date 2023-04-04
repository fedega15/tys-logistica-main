import React, { useContext } from 'react';
import { BrowserRouter as Router, Route,Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Breadcrumbs from "./components/Breadcrumbs/breadcrubm";
import Titulo from './components/Titulo';
import Login from "./pages/Login";
import AgregarCamiones from "./pages/AgregarCamiones";
import ListaCamiones from "./pages/ListaCamiones";
import AuthContext from './context/AuthProvider';


function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

function App() {
  const authContext = useContext(AuthContext);
  const isAuthenticated = !!authContext.token;

  return (
    <div className="App">
    <Router>
      <Navbar />
      <Breadcrumbs />
      <Titulo />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<ListaCamiones />}
          canActivate={() => PrivateRoute({ isAuthenticated })}
        />
        <Route
          path="/agregar-camiones"
          element={<AgregarCamiones />}
          canActivate={() => PrivateRoute({ isAuthenticated })}
        />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*import { BrowserRouter, Routes, Route } from "react-router-dom"
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
             <Route path="/login" element={<Login/>}/>
              <Route  path="/" element={<ListaCamiones/>}/>
              <Route path="/AgregarCamiones"element={<AgregarCamiones/>}/> 

          </Routes> 
        
      
      </BrowserRouter>
    </div>
  )
}
 
function AuthStack() {
  return (
    <>
      <Login/>
    </>
  );
}

function MainStack() {
  return (
    <>
      <ListaCamiones />
      <AgregarCamiones />
    </>
  );
}

function RootStack() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Aquí podrías implementar la lógica de autenticación para determinar si el usuario está autenticado o no.
    // Por ahora, simplemente establecemos manualmente el estado como "true" para probar la funcionalidad de las rutas privadas.
    setIsAuthenticated(true);
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <MainStack />
      ) : (
        <AuthStack />
      )}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <RootStack />
    </div>
  );
}

export default App;
*/

  
