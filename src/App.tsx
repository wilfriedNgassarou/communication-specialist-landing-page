import { Header } from "./components/header/header"
import { Hero } from "./components/hero/hero"

function App() {
  return (
    <>
      <section className="w-full h-dvh flex flex-col">
        <Header />
        <Hero />
      </section>
    </>
  )
}

export default App
