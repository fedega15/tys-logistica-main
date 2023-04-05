import Titulo from "./Titulo";
import Breadcrumbs from "./Breadcrumbs/breadcrubm";
import Navbar from "./Navbar";

function Layout ({ children, title }) {
    return (
      <div className="App">
        <Navbar/>
        <Breadcrumbs />
        <Titulo title={title}/>
        {children}
      </div>
    )
  }

  export default Layout