import Image from 'next/image'
import logo from "@/assets/logo.svg"
import { Button } from "@/components/ui/button"


export default function Response() {
  return (
    <section className='text-white'>
        <Image src={logo} alt="logo" />
    </section>
  )
}
