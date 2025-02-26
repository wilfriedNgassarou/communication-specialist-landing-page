import clsx from "clsx";
import { socialsLink } from "../../constants/socials";
import { Facebook, Instagram, Linkedin, TwitterX } from "react-bootstrap-icons";

export function SocialsLinkContainer() {
  return (
    <div className="absolute flex -bottom-5 h-10 w-40 bg-white shadow-xl rounded-lg overflow-hidden group">
      {socialsLink.map((item) => (
        <a
          key={item.id} 
          className={clsx(
            "flex-grow flex items-center justify-center relative z-10 fill-primary hover:fill-white",
            item.id == 'facebook' && 'peer/facebook', 
            item.id == 'twitter' && 'peer/twitter', 
            item.id == 'linkedin' && 'peer/linkedin', 
            item.id == 'instagram' && 'peer/instagram', 
          )}
          href="" 
          target="_blank"
        >
          { item.id == 'facebook' && <Facebook size={24} className="fill-inherit duration-200" /> }
          { item.id == 'instagram' && <Instagram size={24} className="fill-inherit duration-200" /> }
          { item.id == 'twitter' && <TwitterX size={24} className="fill-inherit duration-200" /> }
          { item.id == 'linkedin' && <Linkedin size={24} className="fill-inherit duration-200" /> }
        </a>
      ))}
      <div 
        className={clsx(
          "absolute left-0 top-0 h-full w-1/4 bg-primary transition-transform duration-200 ease-out",
          "opacity-0 group-hover:opacity-100",
          "peer-hover/facebook:translate-x-0",
          "peer-hover/twitter:translate-x-full",
          "peer-hover/instagram:translate-x-[200%]",
          "peer-hover/linkedin:translate-x-[300%]",
        )}
      />
    </div>
  )
}