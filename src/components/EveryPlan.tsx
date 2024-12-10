import { BanknotesIcon, AcademicCapIcon, DocumentIcon, UserGroupIcon, HandThumbUpIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Sell memberships',
    description:
      'Create recurring revenue with flexible membership tiers and custom benefits.',
    icon: BanknotesIcon,
    cta: 'Start selling memberships'
  },
  {
    name: 'Sell courses',
    description:
      'Share your expertise through structured online courses with videos and quizzes.',
    icon: AcademicCapIcon,
    cta: 'Start selling courses'
  },
  {
    name: 'Sell digital content',
    description:
      'Monetize digital products like ebooks and templates with one-off sales.',
    icon: DocumentIcon,
    cta: 'Start selling digital content'
  },
  {
    name: 'Premium community',
    description:
      'Build exclusive spaces for discussions and networking with premium access.',
    icon: UserGroupIcon,
    cta: 'Start selling digital content'
  },
  {
    name: 'Tipping',
    description:
      'Let supporters show appreciation through voluntary contributions.',
    icon: HandThumbUpIcon,
    cta: 'Start selling digital content'
  },
  {
    name: 'Instant Payouts',
    description:
      'Access your earnings immediately without waiting periods.',
    icon: CurrencyDollarIcon,
    cta: 'Start selling digital content'
  },
]

export default function EveryPlan() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Everything you need to monetize your content</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          What every plan gets you
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-sm/6 text-gray-600">{feature.description}</dd>
                <a 
                  href="https://withme.so" 
                  target="_blank"
                  className="group mt-4 inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  {feature.cta}
                  <ArrowRightIcon 
                    className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" 
                    aria-hidden="true" 
                  />
                </a>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
