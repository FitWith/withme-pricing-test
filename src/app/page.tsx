'use client'

import { CallToAction } from '@/components/CallToAction'
import Faqs from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import Pricing from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import EveryPlan from '@/components/EveryPlan'
import backgroundImage from '@/images/background-faqs.jpg'
import Image from 'next/image'
import BackgroundImage from '@/images/Background.webp'
import BackgroundHero from '@/images/background-hero.png'
import BackgroundHero1 from '@/images/background-hero1.png'

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
      <main className="relative">
        <Pricing  />
        <EveryPlan scrollToTop={scrollToTop} />
        {/* <Faqs /> */}
        <CallToAction scrollToTop={scrollToTop} />
      </main>
      <Footer />
    </>
  )
}
