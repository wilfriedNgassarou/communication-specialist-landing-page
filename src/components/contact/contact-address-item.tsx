import { EnvelopeAt, GeoAlt, Telephone } from "react-bootstrap-icons"

interface Props {
  item: {
    icon: string,
    title: string,
    text: string,
  }
}

export function ContactAddressItem({ item }: Props) {
  return (
    <div className="px-0 lg:px-5 flex group cursor-default items-center fill-primary hover:fill-white w-80 gap-2 h-24 rounded-lg bg-white duration-100 hover:shadow hover:scale-x-105 hover:scale-y-105">
      <div className="flex justify-center items-center w-12 h-12 rounded-md bg-gray-200 duration-100 group-hover:bg-primary bg-opacity-50">
        { item.icon == 'geo' && <GeoAlt size={24} className="fill-inherit" /> }
        { item.icon == 'envelope' && <EnvelopeAt size={24} className="fill-inherit" /> }
        { item.icon == 'telephone' && <Telephone size={24} className="fill-inherit" /> }
      </div>
      <div>
        <h6 className="text-[#424E60] text-sm">{item.title}</h6>
        <p className="text-[#132238] font-medium">{item.text}</p>
      </div>
    </div>
  )
}