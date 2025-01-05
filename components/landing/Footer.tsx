import Image from 'next/image'
import React from 'react';
import slack from "@/assets/slack.jpg";
import footerImage from "@/assets/footerimage.jpg"

export default function Footer() {
  return (
    <footer className='text-white flex flex-col items-center my-3'>
      <h1 className='text-4xl font-semibold text-center'>
        Powered by Passion. <br />
        Inspired by <span className='bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] inline-block text-transparent bg-clip-text'>Level SuperMind.</span>
      </h1>
      <p>
        Celebrating innovation and collaboration with the minds driving this extraordinary competition.X
      </p>
      <div className='flex items-center justify-center gap-3'>
        <Image src={slack} alt='slack' height={150}/>
        <Image src={footerImage} alt='slack' height={150}/>
      </div>
    </footer>
  )
}
