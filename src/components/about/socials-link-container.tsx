import clsx from "clsx";
import { socialsLink } from "../../constants/socials";
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons";

export function SocialsLinkContainer() {
  return (
    <div className="absolute flex -bottom-5 h-10 w-36 bg-white shadow-xl rounded-lg overflow-hidden">
      {socialsLink.map((item) => (
        <div 
          key={item.id} 
          className={clsx(
            "flex-grow flex items-center justify-center relative z-10",
            item.id == 'facebook' && 'fill-white',
            item.id != 'facebook' && 'fill-primary hover:fill-white',
            item.id == 'facebook' && 'peer/facebook', 
            item.id == 'linkedin' && 'peer/linkedin', 
            item.id == 'instagram' && 'peer/instagram', 
          )}
        >
          <a href="" target="_blank">
            { item.id == 'facebook' && <Facebook size={24} className="fill-inherit duration-200" /> }
            { item.id == 'instagram' && <Instagram size={24} className="fill-inherit duration-200" /> }
            { item.id == 'linkedin' && <Linkedin size={24} className="fill-inherit duration-200" /> }
          </a>
        </div>
      ))}
      <div 
        className={clsx(
          "absolute left-0 top-0 h-full w-1/3 bg-primary duration-200 ease-out",
          "peer-hover/facebook:translate-x-0",
          "peer-hover/instagram:translate-x-full",
          "peer-hover/linkedin:translate-x-[200%]",
        )}
      />
    </div>
  )
}