export function InputField({ placeholder }: { placeholder: string }) {
  return (
    <div className="border-b-2 h-10 focus-within:border-b-primary">
      <input 
        type="text" 
        className="w-full outline-none pl-2 h-full bg-transparent placeholder:text-gray-500" 
        placeholder={placeholder} 
      />
    </div>
  )
}