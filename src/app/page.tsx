'use client'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Pricing from '@/components/Pricing'
import EveryPlan from '@/components/EveryPlan'
import BackgroundImage from '@/images/Background.webp'
import Image from 'next/image'

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Header />
      <Image src={BackgroundImage} alt="Background" className="absolute top-0 w-full h-full object-cover opacity-50" />
      <main className="relative flex flex-col items-center justify-center">
        <Pricing  />
        <EveryPlan scrollToTop={scrollToTop} />
        {/* <Faqs /> */}
        <CallToAction scrollToTop={scrollToTop} />
      </main>
      <Footer />
    </>
  )
}
