import { ArrowRight } from "react-bootstrap-icons";

export function Discussion() {
  return (
    <div className="h-96 px-5 flex flex-col gap-6 justify-center items-center bg-secondary text-white">
      <h2 className="text-2xl lg:text-3xl font-semibold">
        Do you have Project Ideas? <br />
        Let's discuss your project!
      </h2>
      <p className="text-center text-lg lg:text-xl">
        There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration.
      </p>
      <button className="flex gap-2 items-center justify-center rounded border-2 border-white h-14 w-60 font-medium text-white">
        Let's work Together 
        <ArrowRight size={18} />
      </button>
    </div>
  )
}