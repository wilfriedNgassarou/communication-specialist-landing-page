import { testimonials } from "../../constants/testimonials";

export function Testimonials() {
  return (
    <section className="px-5 lg:px-32 py-24">
      <h2 className="font-semibold text-3xl text-center mb-4">
        Testimonials
      </h2>
      <p className="text-gray-500 text-center text-balance mb-24 mx-auto lg:w-2/3">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {testimonials.map((item, index) => (
          <div 
            key={index}
            className="w-full rounded-lg overflow-hidden shadow-lg"
          >
            <div className="w-full h-60 bg-gray-300">
              <img 
                className="w-full h-full object-cover"
                src={item.image} 
                alt="Portofolio Banner" 
              />
            </div>
            <div className="w-full p-6 bg-white">
              <h5 className="capitalize text-sm text-gray-400">{item.legend}</h5>
              <h3 className="font-medium text-lg mt-2">{item.title}</h3>
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}