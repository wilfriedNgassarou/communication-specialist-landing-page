import { Behance, Dribbble, Facebook, Instagram, Linkedin, Send, TwitterX } from "react-bootstrap-icons";
import { InputField } from "./input-field";
import { addresses } from "../../constants/addresses";
import { ContactAddressItem } from "./contact-address-item";
import clsx from "clsx";

export function Contact() {
  const links = [
    { clsName: 'peer/facebook', link: '', icon: <Facebook size={28} className="fill-inherit duration-200 ease-out" /> },
    { clsName: 'peer/instagram', link: '', icon: <Instagram size={28} className="fill-inherit duration-200 ease-out" /> },
    { clsName: 'peer/twitter', link: '', icon: <TwitterX size={28} className="fill-inherit duration-200 ease-out" /> },
    { clsName: 'peer/linkedin', link: '', icon: <Linkedin size={28} className="fill-inherit duration-200 ease-out" /> },
    { clsName: 'peer/dribbble', link: '', icon: <Dribbble size={28} className="fill-inherit duration-200 ease-out" /> },
    { clsName: 'peer/behance', link: '', icon: <Behance size={28} className="fill-inherit duration-200 ease-out" /> },
  ]

  return (
    <section className="px-5 lg:px-32 w-full h-auto lg:h-dvh lg:min-h-[500px] lg:max-h-[700px] flex items-center">
      <section className="w-full h-full relative -bottom-14 bg-white flex flex-col gap-y-12 lg:flex-row lg:items-center rounded-lg shadow-2xl px-5 py-5 lg:py-0 lg:px-10">
        <section className="w-full lg:w-1/2 flex flex-col gap-3 pr-8">
          <h2 className="font-semibold text-2xl lg:text-3xl">Let's discuss your Project</h2>
          <p className="text-gray-500">There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.</p>
          <div className="flex flex-col gap-1">
            {addresses.map((item, index) => <ContactAddressItem key={index} item={item} />)}
          </div>
          <div className="flex justify-between h-10 w-60 mt-4 relative group">
            {links.map((item, index) => (
              <a 
                key={index}
                className={clsx(
                  "fill-primary hover:fill-white flex-grow flex justify-center items-center relative z-10",
                  item.clsName
                )}
                href={item.link}
                target="_blank"
              >
                {item.icon}
              </a>
            ))}
            <div 
              className={clsx(
                "absolute left-0 top-0 w-1/6 h-full bg-primary rounded transition-transform duration-200 ease-out",
                "opacity-0 group-hover:opacity-100",
                "peer-hover/facebook:translate-x-0",
                "peer-hover/instagram:translate-x-full",
                "peer-hover/twitter:translate-x-[200%]",
                "peer-hover/linkedin:translate-x-[300%]",
                "peer-hover/dribbble:translate-x-[400%]",
                "peer-hover/behance:translate-x-[500%]",
              )}
            />
          </div>
        </section>
        <section className="w-full lg:w-1/2 flex flex-col gap-8 justify-between">
          <p className="text-gray-500">
            There are many variations of passages of Lorem ipsum available, <br />
            but the majority have suffered alte.
          </p>
          <form action="" className="flex flex-col gap-4">
            <InputField placeholder="Name*" />
            <InputField placeholder="Email*" />
            <InputField placeholder="Location" />
            <InputField placeholder="Subject*" />
            <InputField placeholder="Message*" />
            <button 
              type="submit" 
              className="h-10 w-40 mt-8 flex gap-2 items-center justify-center rounded bg-primary bg-opacity-85 hover:bg-opacity-100 duration-150  font-medium text-white"
            >
              Submit
              <Send className="rotate-45" size={18} />
            </button>
          </form>
        </section>
      </section>
    </section>
  )
}