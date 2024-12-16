'use client'

import { Fragment, useState } from 'react'
import { CheckIcon, MinusIcon } from '@heroicons/react/16/solid'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Radio, RadioGroup } from '@headlessui/react'

type FrequencyValue = 'monthly' | 'annually';

type TierName = 'Starter' | 'Growth' | 'Pro' | 'Enterprise';

type FeatureTiers = {
  [K in TierName]: string | boolean;
};

const includedFeatures = [
  '4 X 1:1 sessions over 12 weeks',
  'Custom Launch Plan', 
  'Expert Advice from Established CEOs',
  'Hands-on Marketing Support',
]

// Payment Links
const STRIPE_BASE_URL = 'https://buy.stripe.com/'

type ProductIds = {
  implementation: string;
  starter: { [K in FrequencyValue]: string };
  growth: { [K in FrequencyValue]: string };
  pro: { [K in FrequencyValue]: string };
  enterprise: { [K in FrequencyValue]: string };
};

const PRODUCT_IDS: ProductIds = {
  implementation: '3csaHc97LbQY84EaEM',
  starter: {
    monthly: '5kA6qWdo1aMU5Ww6oo',
    annually: '00geXs3Nr7AI3Oo28h'
  },
  growth: {
    monthly: 'cN29D86ZD08g0CceUV', 
    annually: '5kAcPk4Rvf3a2KkdQS'
  },
  pro: {
    monthly: 'cN2g1w1Fj3ks0CcdQT',
    annually: '14k9D8cjX8EM0CcbIM'
  },
  enterprise: {
    monthly: '3cscPk2Jn3ks1Gg6ot',
    annually: 'cN24iO4Rv5sAbgQ9AG'
  }
}

const getBuyLink = (productId: string | { [K in FrequencyValue]: string }, frequency?: FrequencyValue) => {
  if (typeof productId === 'string') return `${STRIPE_BASE_URL}${productId}`;
  return `${STRIPE_BASE_URL}${frequency ? productId[frequency] : ''}`;
}


const frequencies: { value: FrequencyValue; label: string; priceSuffix: string; saving: string }[] = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month', saving: '£0' },
  { value: 'annually', label: 'Annually', priceSuffix: '/month, billed annually', saving: '£48' },
]

const tiers: {
  name: TierName;
  id: string;
  description: string;
  price: { monthly: string; annually: string, saving: string };
  href: string;
  secondary_headers: string[];
  firstGroup?: string[];
  secondGroup?: string[];
  mostPopular: boolean;
  features?: string[];
}[] = [
  {
    name: 'Starter' as const,
    id: 'tier-starter',
    description: 'Start a simple platform with all the core features listed.',
    price: { monthly: '£29', annually: '£25', saving: '£48' },
    href: 'https://withme.so/pricing-table',
    secondary_headers: ['Core features:', 'Plus:'],
    firstGroup: [
      '50 Customers',
      'Subscriptions',
      'Courses',
      'One-off digital content sales',
      'Paid or free community',
      'Paid or free messaging',
      'Tipping',
      'Instant payouts', 
      'Insights',
      'Automatic notifications for members'
    ],
    secondGroup: [
      'Video',
      'Youtube/loom embed',
      'PDF upload',
      'Live streams',
      '20 image carousels',
      'Audio upload',
      'Promotional codes',
      'Notifications'
    ],
    mostPopular: false,
  },
  {
    name: 'Growth' as const,
    id: 'tier-growth',
    description: 'Get key community building features, all in one place.',
    price: { monthly: '£99', annually: '£84', saving: '£180' },
    href: 'https://withme.so/pricing-table',
    secondary_headers: ['Everything in Starter, plus:'],
    firstGroup: [
      '500 Customers',
      'Paid memberships',
      'Weekly community digest',
      'Custom branding',
      'Viral link'
    ],
    mostPopular: true,
  },
  {
    name: 'Pro' as const,
    id: 'tier-pro',
    description: 'Pro your community with workflows and customizations',
    price: { monthly: '£199', annually: '£169', saving: '£360' },
    href: 'https://withme.so/pricing-table',
    secondary_headers: ['Everything in Growth, plus:', 'Annual plan only:'],
    firstGroup: [
        '1000 Customers',
        '1:1 Async Coaching module',
        'Notifications',
        'Member affiliate programme'
    ],
    secondGroup: [
      'Quarterly business reviews',
      'Dedicated customer success manager',
    ],

    mostPopular: false,
  },
  {
    name: 'Enterprise' as const,
    id: 'tier-enterprise',
    description: 'Run your business with full feature access and the highest limits',
    price: { monthly: '£399', annually: '£339', saving: '£720' },
    href: 'https://withme.so/pricing-table',
    secondary_headers: ['Everything in Pro, plus:', 'Annual plan only:'],
    firstGroup: [
      'Unlimited Customers',
      'Unlimited Storage', 
      'Custom single sign-on (SSO)',
      'Priority support',
      'Advanced analytics',
      'Lower transaction fees',
      'Custom email branding'
    ],
    secondGroup: [
      'Concierge onboarding',
      'Quarterly business reviews', 
      'Dedicated customer success manager',
      'Full migration service for courses and subscriptions'
    ],
    mostPopular: false,
  },
]

const sections: {
  name: string;
  features: { name: string; tiers: FeatureTiers }[];
}[] = [
  {
    name: 'Products',
    features: [
      { name: 'Customers', tiers: { Starter: '50', Growth: '500', Pro: '1000', Enterprise: 'Unlimited' } },
      { name: 'Admins', tiers: { Starter: '1', Growth: '3', Pro: '5', Enterprise: '10' } },
      { name: 'Moderators', tiers: { Starter: '1', Growth: '10', Pro: '15', Enterprise: '100' } },
      { name: 'Spaces', tiers: { Starter: '10', Growth: '20', Pro: '30', Enterprise: '100' } },
      { name: 'Transaction fees', tiers: { Starter: '4%', Growth: '2%', Pro: '1%', Enterprise: '0.5%' } },
      { name: 'Content storage', tiers: { Starter: '10GB', Growth: '100GB', Pro: '250GB', Enterprise: '1TB' } },
      { name: 'Admin API requests', tiers: { Starter: false, Growth: false, Pro: '5,000/mo', Enterprise: '30,000/mo' } },
      { name: 'Subscriptions', tiers: { Starter: '1', Growth: '2', Pro: '3', Enterprise: '3' } },
      { name: 'Single digital content sales', tiers: { Starter: '3', Growth: '5', Pro: 'Unlimited', Enterprise: 'Unlimited' } },
      { name: 'Courses', tiers: { Starter: false, Growth: '2', Pro: 'Unlimited', Enterprise: 'Unlimited' } },
    ],
  },
  {
    name: 'Features',
    features: [
      { name: 'Private spaces', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
      { name: 'Bulk import/export', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
      { name: 'In-app notifications', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
      { name: 'Member profiles & directory', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
      { name: 'Basic moderation', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
      { name: 'Direct messaging', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
      { name: 'Group chat', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
      { name: 'Weekly email digest', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
      { name: 'Events', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
      { name: 'GDPR compliant', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
      { name: 'iOS and Android App', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
      { name: 'Chat spaces', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
      { name: 'Scheduled posts', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
      { name: 'Advanced reporting', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
      { name: 'Gamification', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
      { name: 'Custom domain', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
      { name: 'Custom CSS/Javascript', tiers: { Starter: false, Growth: true, Pro: true, Enterprise: true } },
      { name: 'Zapier integration', tiers: { Starter: false, Growth: true, Pro: true, Enterprise: true } },
      { name: 'Embed widgets', tiers: { Starter: false, Growth: true, Pro: true, Enterprise: true } },
      { name: 'White-labeled community', tiers: { Starter: false, Growth: true, Pro: true, Enterprise: true } },
    ],
  },
]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}



function SuccessLaunch() {
  return (
    <div className="bg-white py-12 sm:py-12 mb-12">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mt-16 max-w-7xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-semibold tracking-tight text-gray-900">Ensure your launch is successful</h3>
            <div className="mt-8 flex items-center gap-x-4">
              <h4 className="flex-none text-sm/6 font-semibold text-[#3C55F3]">What&apos;s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3 mt-4">
                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[#3C55F3]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
            <div className="rounded-2xl bg-gray-50 py-4 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-8">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Implementation Specialist</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-semibold tracking-tight text-gray-900">£1000</span>
                  <span className="text-sm/6 font-semibold tracking-wide text-gray-600">GBP</span>
                </p>
                <a
                  href={getBuyLink(PRODUCT_IDS.implementation)} target='_blank'
                  className="mt-10 block w-full rounded-md bg-[#3C55F3] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#3347d1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3C55F3]"
                >
                  Get started
                </a>
                <p className="mt-6 text-xs/5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




export default function Pricing() {
  const [frequency, setFrequency] = useState<{ value: FrequencyValue; label: string; priceSuffix: string , saving: string }>(frequencies[0]);

  return (
    <div className="bg-transparent py-12 sm:py-12">
      <div className="mx-auto max-w-4xl px-6 text-center lg:max-w-4xl lg:px-8">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-950 sm:text-6xl lg:text-pretty">
          Choose the WithMe plan that&apos;s right for you.
        </h1>
        <p className="mt-6 mx-auto max-w-4xl text-pretty text-lg text-[#6E89AF] sm:text-xl/8">
          WithMe is the partner for growth to the world&apos;s best creators and experts. With flexible pricing options that only come into play after you start making money, we&apos;re here to help you succeed.
        </p>
      </div>

      <div className="mt-16 flex justify-center">
        <fieldset aria-label="Payment frequency">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-inset ring-gray-200 bg-white/80"
          >
            {frequencies.map((option) => (
              <Radio
                key={option.value}
                value={option}
                className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-[#3C55F3] data-[checked]:text-white"
              >
                {option.label}
              </Radio>
            ))}
          </RadioGroup>
        </fieldset>
      </div>

      <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-12 xl:max-w-none xl:grid-cols-4">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.mostPopular ? 'ring-2 ring-[#3C55F3]' : 'ring-1 ring-gray-200',
              'rounded-3xl p-8', 'bg-white'
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.mostPopular ? 'text-[#3C55F3]' : 'text-gray-900',
                'text-lg/8 font-semibold',
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 text-sm/6 text-gray-600">{tier.description}</p>
            <p className="mt-6 flex flex-col">
              <span className="flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  {tier.price[frequency.value]}
                </span>
                <span className="text-sm/6 font-semibold text-gray-600">{frequency.priceSuffix}</span>
              </span>
              {
                frequency.value === 'annually' ?
                  <span className="text-sm/6 font-semibold text-[#4159F2] mt-1">Saving {tier.price.saving}</span>
                : 
                <span className="text-sm/6 font-semibold text-[#4159F2] mt-1">&nbsp;</span>
              }
            </p>
            <a
              href={getBuyLink(PRODUCT_IDS[tier.name.toLowerCase() as keyof typeof PRODUCT_IDS], frequency.value)}
              target="_blank"
              aria-describedby={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'bg-[#3C55F3] text-white shadow-sm hover:bg-[#3347d1]'
                  : 'text-[#3C55F3] ring-1 ring-inset ring-[#3C55F3] hover:ring-[#3347d1]',
                'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3C55F3]',
              )}
            >
              Upgrade
            </a>
            <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600">
              {tier.secondary_headers[0] && (
                <li className="font-semibold text-gray-900">{tier.secondary_headers[0]}</li>
              )}
              {tier.firstGroup?.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[#3C55F3]" />
                  {feature}
                </li>
              ))}
              {tier.secondary_headers[1] && (
                <li className="font-semibold text-gray-900 pt-6">{tier.secondary_headers[1]}</li>
              )}
              {tier.secondGroup?.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[#3C55F3]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>



      <div className="mx-auto max-w-2xl px-6 pt-16 sm:pt-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-4xl px-6 text-center lg:max-w-4xl lg:px-8 mt-24 mb-12">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-950 sm:text-6xl lg:text-pretty">
            Compare plans and Features
          </h1>
          <p className="mt-6 mx-auto max-w-4xl text-pretty text-md text-[#6E89AF] sm:text-xl/8">
            WithMe is the partner for growth to the world&apos;s best creators and experts. With flexible pricing options that only come into play after you start making money, we&apos;re here to help you succeed.
          </p>
        </div>

        <table className="w-full text-left max-sm:hidden">
          <caption className="sr-only">Pricing plan comparison</caption>
          <colgroup>
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
          </colgroup>
          <thead>
            <tr>
              <td className="p-0" />
              {tiers.map((tier) => (
                <th key={tier.name} scope="col" className="p-0">
                  <div className="text-sm font-semibold text-[#3C55F3]">
                    {tier.name} <span className="sr-only">plan</span>
                  </div>
                </th>
              ))}
            </tr>
            <tr>
              <th className="p-0" />
              {tiers.map((tier) => (
                <td key={tier.name} className="px-0 pb-0 pt-3">
                  <a
                    href={tier.href}
                    aria-label={`Get started with the ${tier.name} plan`}
                    className="inline-block rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Get started
                  </a>
                </td>
              ))}
            </tr>
          </thead>
          {sections.map((section) => (
            <tbody key={section.name} className="group">
              <tr>
                <th scope="colgroup" colSpan={5} className="px-0 pb-0 pt-10 group-first-of-type:pt-5">
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold text-gray-950">
                    {section.name}
                  </div>
                </th>
              </tr>
              {section.features.map((feature) => (
                <tr key={feature.name} className="border-b border-gray-100 last:border-none">
                  <th scope="row" className="px-0 py-4 text-sm/6 font-normal text-gray-600">
                    {feature.name}
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="p-4 max-sm:text-center">
                      {typeof feature.tiers[tier.name] === 'string' ? (
                        <>
                          <span className="sr-only">{tier.name} includes:</span>
                          <span className="text-sm/6 text-gray-950">{feature.tiers[tier.name]}</span>
                        </>
                      ) : (
                        <>
                          {feature.tiers[tier.name] === true ? (
                            <CheckIcon aria-hidden="true" className="inline-block size-4 fill-green-600" />
                          ) : (
                            <MinusIcon aria-hidden="true" className="inline-block size-4 fill-gray-400" />
                          )}

                          <span className="sr-only">
                            {feature.tiers[tier.name] === true
                              ? `Included in ${tier.name}`
                              : `Not included in ${tier.name}`}
                          </span>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
        </table>

        <TabGroup className="sm:hidden">
          <TabList className="flex">
            {tiers.map((tier) => (
              <Tab
                key={tier.name}
                className="w-1/4 border-b border-gray-100 py-4 text-base/8 font-medium text-[#3C55F3] data-[selected]:border-[#3C55F3] [&:not([data-focus])]:focus:outline-none"
              >
                {tier.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels as={Fragment}>
            {tiers.map((tier) => (
              <TabPanel key={tier.name}>
                <a
                  href={tier.href}
                  target='_blank'
                  className="mt-8 block rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Get started
                </a>
                {sections.map((section) => (
                  <Fragment key={section.name}>
                    <div className="-mx-6 mt-10 rounded-lg bg-gray-50 px-6 py-3 text-sm/6 font-semibold text-gray-950 group-first-of-type:mt-5">
                      {section.name}
                    </div>
                    <dl>
                      {section.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="grid grid-cols-2 border-b border-gray-100 py-4 last:border-none"
                        >
                          <dt className="text-sm/6 font-normal text-gray-600">{feature.name}</dt>
                          <dd className="text-center">
                            {typeof feature.tiers[tier.name] === 'string' ? (
                              <span className="text-sm/6 text-gray-950">{feature.tiers[tier.name]}</span>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon aria-hidden="true" className="inline-block size-4 fill-green-600" />
                                ) : (
                                  <MinusIcon aria-hidden="true" className="inline-block size-4 fill-gray-400" />
                                )}

                                <span className="sr-only">{feature.tiers[tier.name] === true ? 'Yes' : 'No'}</span>
                              </>
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </Fragment>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>


        <SuccessLaunch />
      </div>
    </div>
  )
}
