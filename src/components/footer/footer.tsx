export function Footer() {
  return (
    <>
      <section className="bg-gray-700 w-full h-14" />
      <section className="px-5 lg:px-20 bg-gray-700 text-white w-full h-28 flex flex-col gap-y-4 lg:flex-row justify-center lg:justify-between lg:items-center">
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
    </>
  )
}