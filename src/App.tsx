import { About } from "./components/about/about"
import { Contact } from "./components/contact/contact"
import { Discussion } from "./components/discussion/discussion"
import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import { Hero } from "./components/hero/hero"
import { Portofolios } from "./components/portofolios/portofolios"
import { Testimonials } from "./components/testimonials/testimonials"
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
      <Portofolios />
      <Discussion />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
