import { Behance, Dribbble, Facebook, Instagram, Linkedin, Send } from "react-bootstrap-icons";
import { InputField } from "./input-field";
import { addresses } from "../../constants/addresses";
import { ContactAddressItem } from "./contact-address-item";

export function Contact() {
  return (
    <section className="px-5 lg:px-32 w-full h-auto lg:h-dvh lg:min-h-[500px] lg:max-h-[700px] flex items-center">
      <section className="w-full h-full relative -bottom-14 bg-white flex flex-col gap-y-12 lg:flex-row lg:items-center rounded-lg shadow-2xl px-5 py-5 lg:py-0 lg:px-10">
        <section className="w-full lg:w-1/2 flex flex-col gap-3 pr-8">
          <h2 className="font-semibold text-2xl lg:text-3xl">Let's discuss your Project</h2>
          <p className="text-gray-500">There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.</p>
          <div className="flex flex-col gap-1">
            {addresses.map((item, index) => <ContactAddressItem key={index} item={item} />)}
          </div>
          <div className="flex mt-4 gap-1">
            <a href="https://web.facebook.com/" target="_blank" className="w-10 h-10 flex items-center justify-center">
              <Facebook size={24} className="fill-primary" />
            </a>
            <a href="https://dribbble.com/" target="_blank" className="w-10 h-10 flex items-center justify-center">
              <Dribbble size={24} className="fill-primary" />
            </a>
            <a href="https://www.behance.net/" target="_blank" className="w-10 h-10 flex items-center justify-center">
              <Behance size={24} className="fill-primary" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" className="w-10 h-10 flex items-center justify-center">
              <Instagram size={24} className="fill-primary" />
            </a>
            <a href="https://fr.linkedin.com/" target="_blank" className="w-10 h-10 flex items-center justify-center">
              <Linkedin size={24} className="fill-primary" />
            </a>
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