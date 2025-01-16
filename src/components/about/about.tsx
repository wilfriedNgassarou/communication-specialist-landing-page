import { Download } from "react-bootstrap-icons";
import { SocialsLinkContainer } from "./socials-link-container";

export function About() {
  return (
    <section
      id="about" 
      className="h-auto lg:h-[90dvh] px-5 lg:px-20 relative -bottom-20"
    >
      <div
        style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}
        className="bg-white w-full h-full rounded-lg py-6 px-6 lg:py-10 lg:px-16 flex flex-col-reverse gap-y-10 lg:flex-row lg:items-center"
      >
        <div className="flex justify-center lg:justify-start items-center h-full w-full lg:w-[45%]">
          <div className="h-64 md:h-96 aspect-square rounded-lg relative flex justify-center">
            <img
              className="h-full aspect-square object-cover rounded-xl"
              src="/hero.webp" 
              alt="Jane Picture" 
            />
            <SocialsLinkContainer />
          </div>
        </div>
        <article className="h-auto lg:h-96 lg:py-4 w-full lg:w-[55%] flex gap-y-6 lg:gap-y-0 flex-col justify-between">
          <h2 className="font-semibold text-2xl lg:text-3xl text-pretty lg:text-balance">
            I am a Communication specialist, <span className="text-secondary">writer and story teller</span>
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra
          </p>
          <div className="flex items-center gap-4">
            <button 
              className="flex items-center justify-center rounded bg-primary bg-opacity-85 hover:bg-opacity-100 duration-150 h-10 w-32 font-medium text-white"
            >
              My Project
            </button>
            <button className="flex gap-2 items-center justify-center rounded border-primary border-[1px] h-10 w-40 font-medium text-primary">
              <Download size={18} />
              Download CV
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}