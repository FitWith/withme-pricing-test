'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { getBuyLink, PRODUCT_IDS } from '@/components/Pricing'
import { Header } from '@/components/Header'
import Image from 'next/image'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Reviews', href: '#reviews' },
]

export function Hero() {
  

  return (
    <div className="relative isolate bg-white w-full">
      <header className="absolute inset-x-0 top-0 z-50">
        <Header />
        {/* <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">


          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <a
              href="https://calendly.com/sdr-team-9rc/fitwith-demoig?month=2024-09"
              target="_blank"
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-[#3C55F3] shadow-sm ring-1 ring-inset ring-[#3C55F3] hover:ring-[#3347d1]"
            >
              Talk to us
            </a>
            <a
              href={getBuyLink(PRODUCT_IDS.implementation)}
              target="_blank"
              className="rounded-md bg-[#3C55F3] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3347d1]"
            >
              Get started
            </a>
          </div>
        </nav> */}
 
      </header>

      <div className="relative w-full">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-16">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                     We&apos;ve helped 100+ creators{' '}
                    <a href="#features" className="whitespace-nowrap font-semibold text-[#3C55F3]">
                      <span className="absolute inset-0" aria-hidden="true" />
                      See how <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Launch your creator business with expert guidance
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Get personalized support from experienced implementation specialists who will help you set up your platform, create your launch strategy, and start generating revenue.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href={getBuyLink(PRODUCT_IDS.implementation)}
                    target="_blank"
                    className="rounded-md bg-[#3C55F3] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3347d1]"
                  >
                    Get started
                  </a>
                  <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbSUyMHdvcmslMjB0ZWNofGVufDB8MXwwfHx8Mg%3D%3D"
            alt="Team working together"
            width={1200}
            height={800}
            priority
          />
        </div>
      </div>
    </div>
  )
} 