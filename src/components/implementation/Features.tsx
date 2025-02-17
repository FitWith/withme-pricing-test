import { 
  UserGroupIcon, 
  RocketLaunchIcon, 
  PresentationChartLineIcon, 
  BuildingStorefrontIcon 
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Custom Launch Strategy',
    description:
      'Get a personalized roadmap tailored to your goals and audience.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Expert 1:1 Sessions',
    description: 'Four dedicated sessions with your implementation specialist over 12 weeks.',
    icon: UserGroupIcon,
  },
  {
    name: 'Revenue Planning',
    description: 'Strategic advice on pricing and monetization to maximize your earnings.',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Marketing Support',
    description: 'Hands-on guidance for content planning and promotional campaigns.',
    icon: BuildingStorefrontIcon,
  },
]

export function Features() {
  return (
    <div id="features" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-[#3C55F3]">Launch faster</h2>
              <p className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need for a successful launch
              </p>
              <p className="mt-6 text-base/7 text-gray-600">
                Our implementation specialists will guide you through every step of launching your creator business.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-[#3C55F3]" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate shadow-md overflow-hidden max-h-[650px] object-cover image-position-bottom sm:mx-auto sm:max-w-2xl sm:rounded-3xl lg:mx-0 lg:max-w-none">
              <img
                alt="Implementation dashboard"
                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdvcmslMjBmcm9tJTIwaG9tZXxlbnwwfDF8MHx8fDI%3D"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 