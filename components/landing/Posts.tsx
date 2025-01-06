import Image from 'next/image'
import logo from "@/assets/posts.png"
import { Input } from '../ui/input'

export default function Posts() {
  return (
    <section className="flex items-center w-full pl-8 my-2">
        <div className="w-1/2 flex flex-col">
            <h1 className="text-6xl text-center bg-gradient-to-r from-green-400 via-blue-600 to-violet-700 inline-block text-transparent bg-clip-text">
                Pick. Post.
            </h1>
            <h1 className="text-5xl text-white text-center my-3">
                Dominate Insights.
            </h1>
            <p className="text-gray-400 text-xl">
                Pick a post type and uncover engagement trends tailored for your content strategy.Reel
            </p>
            <Input className="text-white w-3/4 mx-[auto]"/>
        </div>
        <div className="w-1/2 h-full">
            <Image src={logo} alt="logo" className="h-[90vh] w-[35vw]"/>
        </div>
    </section>
  )
}
