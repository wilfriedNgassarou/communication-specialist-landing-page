import clsx from "clsx"
import { useState } from "react"
import { List, XLg } from "react-bootstrap-icons"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="px-5 lg:px-20 fixed z-20 top-0 left-0 w-full lg:static bg-white h-16 flex justify-between items-center">
      <div className="flex items-center gap-1">
        <span className="flex items-center justify-center rounded-3xl h-8 w-12 bg-primary text-white font-medium">JD</span>
        <h2 className="font-semibold">Jane Doe</h2>
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)} 
        className="absolute z-20 right-2 top-4 lg:hidden"
      >
        {isOpen ? <XLg size={24} /> : <List size={24} />}
      </div>
      <nav>
        <ul 
          className={clsx(
            "fixed inset-0 bg-white lg:static flex items-center gap-6",
            "flex-col lg:flex-row justify-center lg:justify-start ease-out",
            isOpen ? "translate-x-0 duration-300" : "translate-x-full lg:translate-x-0 duration-200"
          )}
        >
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Process</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Services</a></li>
          <button className="flex items-center justify-center rounded bg-primary bg-opacity-85 hover:bg-opacity-100 duration-150 h-10 w-24 font-medium text-white">Contact</button>
        </ul>
      </nav>
    </header>
  )
}