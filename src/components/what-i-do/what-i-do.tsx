import { services } from "../../constants/services";

export function WhatIDo() {
  return (
    <section className="h-auto lg:h-dvh w-full pt-20">
      <section className="px-5 lg:px-20 w-full bg-gray-200/60 h-full flex flex-col gap-y-14 lg:flex-row lg:items-center">
        <section className="w-full lg:w-1/2 px-0 lg:px-10 flex flex-col gap-4 pt-10 lg:pt-0">
          <h3 className="font-semibold text-3xl">What I do?</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet.
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
          </p>
          <button className="mt-4 flex items-center justify-center rounded bg-primary bg-opacity-85 hover:bg-opacity-100 duration-150 h-10 w-28 font-medium text-white">
            Say Hello!
          </button>
        </section>
        <section className="w-full lg:w-1/2 flex flex-col gap-4">
          {services.map((item, index) => (
            <div
              key={index} 
              className="w-full h-56 lg:h-36 cursor-default hover:translate-x-3 hover:-translate-y-1 transition-transform duration-300 group rounded-lg overflow-hidden relative flex flex-col shadow-xl justify-between p-5 bg-white"
            >
              <h2 className="font-semibold text-xl">{item.title}</h2>
              <p className="text-gray-500">{item.text}</p>
              <div className="absolute left-0 top-0 h-full w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary"></div>
            </div>
          ))}
        </section>
      </section>
    </section>
  )
}