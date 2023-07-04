import { Home,Whyme, Proyects, MySkills, Footer } from './views';
import { Navbar, Email } from './components';
function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <Whyme />
      <MySkills/>
      <Proyects />
      <Footer />
      <Email/>
    </div>
  )
}

export default App
