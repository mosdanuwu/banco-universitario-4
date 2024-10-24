/*Es un componente que define la estructura pincipal del sitio web
y la configuración de rutas a otras páginas del sitio */
import Routers from "./routes/index";
import './App.css';

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


