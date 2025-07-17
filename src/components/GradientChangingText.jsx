export default function  GradientChangingText({text,className=""}){
  return (
    <h2 className={`${className} pb-2 text-4xl sm:text-5xl  font-semibold opacity-80 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent  bg-[length:200%_200%] animate-gradient `}>
      {text}
    </h2>
  )
}