import { ArrowRight } from "react-bootstrap-icons";
import { portofolios } from "../../constants/portofolios";
import clsx from "clsx";

export function Portofolios() {
  return (
    <section
      id="portofolio" 
      className="px-5 lg:px-32 py-24"
    >
      <h2 className="font-semibold text-3xl text-center mb-4">
        Portofolio
      </h2>
      <p className="text-gray-500 text-center text-balance mb-24 mx-auto lg:w-2/3">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {portofolios.map((item, index) => (
          <div 
            key={index}
            className="w-full rounded-lg overflow-hidden shadow-lg"
          >
            <div className="w-full h-56 bg-gray-300">
              <img 
                className="w-full h-full object-cover"
                src={item.image} 
                alt="Portofolio Banner" 
              />
            </div>
            <div className="w-full p-6 flex flex-col gap-y-4 bg-white">
              <div>
                <h5 className="capitalize text-sm font-medium text-gray-400">{item.tag}</h5>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
              <p>{item.text}</p>
              <button 
                className="relative w-40 h-12 flex justify-center items-center group text-secondary hover:text-white duration-200 border-[1px] rounded border-secondary "
              >
                <div 
                  className={clsx(
                    "absolute inset-0 bg-secondary",
                    "group-hover:scale-x-100 scale-x-0 duration-200 ease-out origin-left"
                  )}
                />
                <div className="relative flex items-center gap-2">
                  <span>Case Study</span>
                  <ArrowRight size={18} />
                </div>
              </button>
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}