'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SuccessLaunch } from '@/components/Pricing'
import { Reviews } from '@/components/implementation/Reviews'
import { Features } from '@/components/implementation/Features'
import { Hero } from '@/components/implementation/Hero'
import { Cta } from '@/components/implementation/Cta'

export default function Implementation() {
  return (
    <>
      {/* <Header /> */}
      <main className="relative flex flex-col items-center justify-center">
        <Hero />
        <Reviews />
        <Features />
        <Cta />
        <SuccessLaunch />
      </main>
      <Footer />
    </>
  )
} 