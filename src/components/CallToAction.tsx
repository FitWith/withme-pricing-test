import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import BackgroundImage from '@/images/Background.webp'

export function CallToAction({ scrollToTop }: { scrollToTop: () => void }) {
  return (
    <section
      id="get-started-today"
      className="relative py-32 my-24 font-roboto w-screen"
    >
      <Image
        className="absolute h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180"
        src={BackgroundImage}
        alt=""
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl mt-6 text-center">
        <p className="mt-12 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          Ready to upgrade?
          </p>
        <p className="mt-6 mx-auto max-w-4xl text-pretty text-lg text-[#6E89AF] sm:text-xl/8">
          WithMe is the partner for growth to the world&apos;s best creators and experts. With flexible pricing options, we&apos;re here to help you succeed.
        </p>
          <a
            onClick={scrollToTop}
            className="mt-10 inline-block rounded-lg px-4 py-2.5 text-sm font-semibold text-white bg-[#4159F2] hover:bg-[#3347d1] transition-colors duration-200 cursor-pointer"
          >
            Upgrade today
          </a>
        </div>
      </Container>
    </section>
  )
}
