import { StarIcon } from '@heroicons/react/20/solid'

export function Reviews() {
  return (
    <section id="reviews" className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <figure className="mx-auto max-w-2xl">
        <p className="sr-only">5 out of 5 stars</p>
        <div className="flex gap-x-1 text-[#3C55F3]">
          <StarIcon aria-hidden="true" className="size-5 flex-none" />
          <StarIcon aria-hidden="true" className="size-5 flex-none" />
          <StarIcon aria-hidden="true" className="size-5 flex-none" />
          <StarIcon aria-hidden="true" className="size-5 flex-none" />
          <StarIcon aria-hidden="true" className="size-5 flex-none" />
        </div>
        <blockquote className="mt-10 text-xl/8 font-semibold tracking-tight text-gray-900 sm:text-2xl/9">
          <p>
            "The implementation specialist was instrumental in helping me launch my online course. Their guidance on pricing, 
            marketing strategy, and platform setup saved me countless hours and helped me avoid common pitfalls. 
            I launched successfully and hit my revenue goals in the first month."
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6">
          <img
            alt="Sarah Chen"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="size-12 rounded-full bg-gray-50"
          />
          <div className="text-sm/6">
            <div className="font-semibold text-gray-900">Sarah Chen</div>
            <div className="mt-0.5 text-gray-600">Fitness Coach & Course Creator</div>
          </div>
        </figcaption>
      </figure>
    </section>
  )
} 