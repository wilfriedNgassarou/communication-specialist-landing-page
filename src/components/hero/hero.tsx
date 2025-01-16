export function Hero() {
  const items = [
    {
      title: 'XY.',
      text: 'Experience'
    },
    {
      title: 'XX+',
      text: 'Project Completed'
    },
    {
      title: 'XX',
      text: 'Happy Client'
    },
  ]

  return (
    <section className="h-auto lg:flex-grow pt-20 lg:pt-0 px-5 lg:px-20 w-full flex flex-col-reverse gap-y-12 lg:flex-row items-center gap-2">
      <article className="w-full lg:w-[45%] h-96 md:h-4/6 lg:h-5/6 flex justify-center rounded-3xl">
        <img 
          src="/hero.webp" 
          className="h-full" 
          alt="" 
        />
      </article>
      <article className="relative lg:w-[55%] px-0 lg:px-10 flex flex-col gap-6 justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-5xl lg:text-6xl text-pretty w-full lg:w-1/2">Hello, I'm Jane</h1>
          <p className="text-[#556070]">
            I'm a Communication specialist, a writer and story teller based in Douala, Cameroon. I strives to build immersive and beautiful Dorem ipsum dolor sit amet, consectetur adipiscing elit.   
          </p>
          <button className="flex items-center justify-center rounded bg-primary bg-opacity-85 hover:bg-opacity-100 duration-150 h-10 w-28 font-medium text-white">
            Say Hello!
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          {items.map((item, index) => (
            <div
              key={index} 
              className="bg-gray-200 rounded-md bg-opacity-50 h-24 flex flex-col justify-center items-center w-full lg:w-1/3"
            >
              <h4 className="font-semibold text-xl lg:text-3xl text-[#424E60]">{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}