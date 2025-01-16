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
    <section className="mx-auto max-w-[1400px] relative">
      <div className="absolute left-0 top-0 w-full h-dvh lg:max-h-[700px] overflow-hidden">
        <div className="absolute translate-x-10 -translate-y-10 right-0 top-0 h-80 w-80 md:w-2/5 md:h-2/5 rounded-full bg-secondary/20 shadow-2xl shadow-secondary/40 blur-[100px]" 
        />
        <div className="absolute translate-x-10 translate-y-10 right-0 bottom-0 h-80 w-80 md:w-2/5 md:h-2/5 rounded-full bg-[#C4F5E9]/50 shadow-2xl shadow-[#C4F5E9]/40 blur-[100px]" />
      </div>
      <section className="w-full lg:h-dvh min-h-[500px] lg:max-h-[700px] flex flex-col relative">
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
    </section>
  )
}

export default App
