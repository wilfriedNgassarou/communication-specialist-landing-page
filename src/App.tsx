import { About } from "./components/about/about"
import { Header } from "./components/header/header"
import { Hero } from "./components/hero/hero"
import { WhatIDo } from "./components/what-i-do/what-i-do"
import { WorkProcess } from "./components/work-process/work-process"

function App() {
  return (
    <>
      <section className="w-full lg:h-dvh flex flex-col">
        <Header />
        <Hero />
      </section>
      <About />
      <WorkProcess />
      <WhatIDo />
    </>
  )
}

export default App
