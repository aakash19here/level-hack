import Image from 'next/image'
import Logo from "@/assets/logo.png"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header>
        <nav className='flex items-center justify-between mx-12 my-2'>
            <div className='flex items-center'>
                <Image  src={Logo} alt='logo'  className='h-10 w-10'/>
                <h1 className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] inline-block text-transparent bg-clip-text text-xl font-semibold">
                    EngageFlow
                </h1>
            </div>
            <div>
                <Button className='bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] mx-3'>
                    LangFlow
                </Button>
                <Button className='bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'>
                    Github
                </Button>
            </div>
        </nav>
    </header>
  )
}
