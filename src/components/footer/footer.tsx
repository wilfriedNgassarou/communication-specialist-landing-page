export function Footer() {
  return (
    <>
      <section className="bg-gray-700 w-full h-14" />
      <footer className="px-5 lg:px-20 bg-gray-700 text-white w-full h-44 flex justify-center flex-col gap-y-8">
        <section className="flex flex-col md:flex-row md:justify-between">
          <nav>
            <ul className="flex gap-3">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </nav>
          <p>
            © {new Date().getFullYear()} Jane Doe - All rights reserved.
          </p>
        </section>
        <section className="flex flex-col md:flex-row md:justify-between">
          <div>Coded by <a className="text-blue-500 underline underline-offset-2" target="_blank" href="https://x.com/Wilfried_Ng23">Wilfried Ngassarou</a> </div>
          <a 
            className="text-blue-500 underline underline-offset-2 font-medium" 
            target="_blank"
            href="https://www.figma.com/design/pCm4Ny7LP4uW4iWU7kVO5A/STEFFI?node-id=135-701&t=Kgtv9UKckksFd4m5-0"
          >
            Source code
          </a>
          <div>Designed by <a className="text-blue-500 underline underline-offset-2" target="_blank" href="https://www.linkedin.com/in/abu-metanji-tony-steve-76219a260">Tony Pijeke</a> </div>
        </section>
      </footer>
    </>
  )
}