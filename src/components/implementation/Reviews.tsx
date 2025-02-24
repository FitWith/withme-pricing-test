import { StarIcon } from '@heroicons/react/20/solid'
import InstagramIcon from '@/images/insta.png'
import Image from 'next/image'
import Gemma from '@/images/gemma.jpg'
import Olivia from '@/images/olivia.jpg'

export function Reviews() {
  return (
    <section id="reviews" className="bg-white px-8 py-28 sm:py-36 lg:px-12">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2">
        <figure>
          <p className="sr-only">5 out of 5 stars</p>
          <div className="flex gap-x-1 text-[#3C55F3]">
            <StarIcon aria-hidden="true" className="size-5 flex-none" />
            <StarIcon aria-hidden="true" className="size-5 flex-none" />
            <StarIcon aria-hidden="true" className="size-5 flex-none" />
            <StarIcon aria-hidden="true" className="size-5 flex-none" />
            <StarIcon aria-hidden="true" className="size-5 flex-none" />
          </div>
          <blockquote className="mt-10 text-lg/7 font-semibold tracking-tight text-gray-900 sm:text-xl/8">
            <p>
              &ldquo;WithMe has been a game-changer for my business. Their ongoing mentorship and 1:1 strategy calls helped me 
              refine my course offerings and pricing strategy. What I love most is how they handle the technical setup and 
              administrative tasks, letting me focus on creating content and connecting with my community.&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-x-6">
            <Image
              alt="Sarah Chen"
              src={Olivia}
              className="size-12 rounded-full bg-gray-50"
              width={48}
              height={48}
            />
            <div className="text-sm/6">
              <a href="https://withme.so/livthepositivefoodie" className="group">
                <div className="font-semibold text-gray-900 group-hover:text-[#3C55F3]">Olivia Mae</div>
                <div className="mt-0.25 text-gray-600">Health & Weightloss Creator</div>
                <div className="mt-1 flex items-center gap-x-2 text-gray-600">
                  <Image src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                  <span>285K followers</span>
                </div>
              </a>
            </div>
          </figcaption>
        </figure>

        <figure>
          <p className="sr-only">5 out of 5 stars</p>
          <div className="flex gap-x-1 text-[#3C55F3]">
            <StarIcon aria-hidden="true" className="size-5 flex-none" />
            <StarIcon aria-hidden="true" className="size-5 flex-none" />
            <StarIcon aria-hidden="true" className="size-5 flex-none" />
            <StarIcon aria-hidden="true" className="size-5 flex-none" />
            <StarIcon aria-hidden="true" className="size-5 flex-none" />
          </div>
          <blockquote className="mt-10 text-lg/7 font-semibold tracking-tight text-gray-900 sm:text-xl/8">
            <p>
              &ldquo;From day one, WithMe provided the support system I needed to succeed. Their team took care of everything - 
              from setting up my community platform to managing member communications. The regular business coaching has been 
              invaluable, helping me scale my impact while maintaining work-life balance.&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-x-6">
            <Image
              alt="Marcus Rodriguez"
              src={Gemma}
              className="size-12 rounded-full bg-gray-50"
              width={48}
              height={48}
            />
            <div className="text-sm/6">
              <a href="https://withme.so/gemma" className="group">
                <div className="font-semibold text-gray-900 group-hover:text-[#3C55F3]">Gemma B</div>
                <div className="mt-0.25 text-gray-600">Food & Weightloss Creator</div>
                <div className="mt-1 flex items-center gap-x-2 text-gray-600">
                <Image src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
                <span>239K followers</span>
                </div>
              </a>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
} 