import { Icons } from './ui/icons'



function Footer() {
  return (
    <div className="absolute bottom-0 left-0 w-full text-xs text-gray-600 flex justify-center">
      <div className="flex ">
        Made with <Icons.logo className="w-4 ml-2" /> <span className='font-bold mr-2'>Shadcn </span>by
        Prince Anumba ©️2024
      </div>
    </div>
  );
}

export default Footer