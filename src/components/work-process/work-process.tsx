import { GraphUp, JournalText, Laptop, Pencil } from "react-bootstrap-icons";
import { workProcess } from "../../constants/work-process";

export function WorkProcess() {
  return (
    <>
      <div className="w-full h-20 bg-gray-200/60"></div>
      <section
        id="process" 
        className="px-5 lg:px-20 h-auto lg:h-dvh w-full flex flex-col gap-y-14 lg:flex-row lg:items-center bg-gray-200/60"
      >
        <section className="w-full lg:w-1/2 px-0 lg:px-10 flex flex-col gap-4 pt-10 lg:pt-0">
          <h3 className="font-semibold text-3xl mb-4">Work Process</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
          </p>
        </section>
        <section className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 pb-10 lg:pb-0">
          {workProcess.map((item, index) => (
            <div
              key={item.title} 
              className="bg-white group w-full lg:w-72 h-64 cursor-default transition-transform duration-300 fill-primary hover:fill-white hover:translate-x-2 hover:-translate-y-3 flex flex-col justify-between p-6 shadow-lg rounded-xl"
            >
              <div>
                <div className="flex justify-center items-center w-16 h-16 rounded-lg transition-colors duration-300 bg-gray-200 bg-opacity-50 group-hover:bg-primary group-hover:bg-opacity-100">
                  { item.icon == 'journal' && <JournalText size={27} className="fill-inherit" /> }
                  { item.icon == 'graph' && <GraphUp size={27} className="fill-inherit" /> }
                  { item.icon == 'pencil' && <Pencil size={27} className="fill-inherit" /> }
                  { item.icon == 'laptop' && <Laptop size={27} className="fill-inherit" /> }
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-xl">{`${index + 1}. ${item.title}`}</h5>
                <p className="mt-4 text-gray-500">{item.text}</p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  )
}