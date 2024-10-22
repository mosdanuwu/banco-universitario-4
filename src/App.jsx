/*Es un componente que define la estructura pincipal del sitio web
y la configuración de rutas a otras páginas del sitio */
import Routers from "./routes/index"
/*El componente Routers de BrowserRouterse asegura de que solo una de 
las rutas dentro de él se renderice en cualquier momento. 
Evalúa las rutas en orden y renderiza la primera que coincida. */
function App() {
  return(
    <>
      <Routers/>
    </>
  )
  
}
export default App
/*import Navbar from './components/Navbar/Navbar.jsx'
import Header from './components/Header/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (
    <>
      <div>
        <Header/>
        <Navbar/>
        <Body/>
        </div>
      </div>
    </>
  )
}

export default App*/
