import { Header } from "./components/Header"
import './App.css'
import { Home } from "./components/Home"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Fooder } from "./components/Fooder"

function App() {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Fooder />
    </>
  )
}

export default App
