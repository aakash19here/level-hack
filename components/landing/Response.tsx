import Image from 'next/image'
import logo from "@/assets/logo.png"
import { Button } from "@/components/ui/button"


export default function Response() {
  return (
    <section className='text-white border-2 border-white m-4 rounded-xl p-4'>
        <div className='flex items-center gap-2'>
          <Image src={logo} alt='logo' height={30} width={30}/>
          <p className='font-bold'>EngageFlow</p>
        </div>
        <p className='my-2'>
          reels are currently driving the thighest engagement across your content outperforming other formats br 35%. Based on our analysis, the ideal time to post your next reel would be wednesday at 6PM, when audience activity peaks. Consistantly posting reels at similar times can help sustain and boost engagement
        </p>
        <div className='px-4'>
          <Button className='mx-2'>Renerate response</Button>
          <Button>Modify</Button>
        </div>
    </section>
  )
}
