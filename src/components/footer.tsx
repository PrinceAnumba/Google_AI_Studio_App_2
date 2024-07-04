import { Icons } from './ui/icons'



function Footer() {
  return (
    <div className=" footer w-full text-xs text-gray-600 flex justify-center p-6">
      <div className="flex ">
        Made with <Icons.logo className="w-4 ml-2" /> <span className='font-bold mr-2'>Shadcn </span>by
        Prince Anumba ©️2024
      </div>
    </div>
  );
}

export default Footer