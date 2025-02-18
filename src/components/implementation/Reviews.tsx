import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

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
              &ldquo;The implementation specialist was instrumental in helping me launch my online course. Their guidance on pricing, 
              marketing strategy, and platform setup saved me countless hours and helped me avoid common pitfalls.&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-x-6">
            <Image
              alt="Sarah Chen"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="size-12 rounded-full bg-gray-50"
              width={48}
              height={48}
            />
            <div className="text-sm/6">
              <div className="font-semibold text-gray-900">Sarah Chen</div>
              <div className="mt-0.5 text-gray-600">Fitness Coach & Course Creator</div>
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
              &ldquo;Working with the implementation team transformed my business. They helped me structure my community platform 
              and create engaging content that resonates with my audience. The ROI has been incredible.&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-x-6">
            <Image
              alt="Marcus Rodriguez"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="size-12 rounded-full bg-gray-50"
              width={48}
              height={48}
            />
            <div className="text-sm/6">
              <div className="font-semibold text-gray-900">Marcus Rodriguez</div>
              <div className="mt-0.5 text-gray-600">Community Builder & Entrepreneur</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
} 