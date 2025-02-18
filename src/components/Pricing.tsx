'use client'

import { Fragment, useState } from 'react'
import { CheckIcon, MinusIcon, ChevronDownIcon } from '@heroicons/react/16/solid'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Radio, RadioGroup } from '@headlessui/react'
import ToolTip from './ToolTip'
import getGeoInfo, { GeoCurrency } from '@/utils/getGeoInfo'

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

const { code, symbol: currencySymbol } = getGeoInfo();

type ProductIds = {
  implementation: string;
  starter: { [K in FrequencyValue]: string };
  growth: { [K in FrequencyValue]: string };
  pro: { [K in FrequencyValue]: string };
  enterprise: { [K in FrequencyValue]: string };
};

export const PRODUCT_IDS: ProductIds = {
  implementation: 'aEUcPk0Bf8EM1Gg28i',
  starter: {
    monthly: 'dR6cPkbfTf3a98I00h',
    annually: '6oEaHcabP9IQ84E4gw'
  },
  growth: {
    monthly: '4gw3eK3Nrg7egBa3cr',
    annually: 'eVa5mS6ZD8EM70AfZc'
  },
  pro: {
    monthly: 'bIY2aGdo1g7edoY9AN',
    annually: 'aEU8z40Bf8EM98I00c'
  },
  enterprise: {
    monthly: '3cscPk2Jn3ks1Gg6ot',
    annually: 'cN24iO4Rv5sAbgQ9AG'
  }
}

export const getBuyLink = (productId: string | { [K in FrequencyValue]: string }, frequency?: FrequencyValue) => {
  if (typeof productId === 'string') return `${STRIPE_BASE_URL}${productId}`;
  return `${STRIPE_BASE_URL}${frequency ? productId[frequency] : ''}`;
}

const monthlyPrices: Record<GeoCurrency['code'], Record<'Starter' | 'Growth' | 'Pro', string>> = {
  GBP: { Starter: '29', Growth: '99', Pro: '199' },
  AUD: { Starter: '49', Growth: '175', Pro: '375' },
  CAD: { Starter: '49', Growth: '175', Pro: '375' },
  EUR: { Starter: '29', Growth: '99', Pro: '199' },
  SEK: { Starter: '399', Growth: '1350', Pro: '2700' },
  USD: { Starter: '29', Growth: '99', Pro: '199' },
};

const annualPrices: Record<GeoCurrency['code'], Record<'Starter' | 'Growth' | 'Pro', string>> = {
  GBP: { Starter: '300', Growth: '1008', Pro: '2028' },
  AUD: { Starter: '550', Growth: '2000', Pro: '3750' },
  CAD: { Starter: '550', Growth: '2000', Pro: '3750' },
  EUR: { Starter: '300', Growth: '1008', Pro: '2028' },
  SEK: { Starter: '4000', Growth: '13750', Pro: '27650' },
  USD: { Starter: '300', Growth: '1008', Pro: '2028' },
};

const implementationPrices: Record<GeoCurrency['code'], string> = {
  GBP: '1499',
  AUD: '2999',
  CAD: '2699',
  EUR: '1799',
  SEK: '19999',
  USD: '1499',
};

const getMonthlyFromYearly = (yearlyAmount: string | number): string => {
  const yearly = typeof yearlyAmount === 'string' ? parseFloat(yearlyAmount) : yearlyAmount;
  return Math.round(yearly / 12).toString();
};



const frequencies: { value: FrequencyValue; label: string; priceSuffix: string; saving: string }[] = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month', saving: '0' },
  { value: 'annually', label: 'Annually', priceSuffix: '/month', saving: '14%' },
]

const tiers: {
  name: TierName;
  id: string;
  description: string;
  price: { monthly: string; annually: string, saving: string };
  href: string;
  secondary_headers: string[];
  firstGroup?: string[];
  info?: string[];
  secondGroup?: string[];
  mostPopular: boolean;
  features?: string[];
}[] = [
    {
      name: 'Starter' as const,
      id: 'tier-starter',
      description: 'All features included. Start selling digital products and courses and upsell your first 50 subscriptions',
      price: { monthly: monthlyPrices[code].Starter, annually: getMonthlyFromYearly(annualPrices[code].Starter), saving: '48' },
      href: 'https://withme.so/pricing-table',
      secondary_headers: ['Core features:', 'Plus:'],
      firstGroup: [
        'Sell as many products as you want',
        'Support up to 50 Subscribers',
        'iOS & Android apps',
        'Courses',
        'Digital Products',
        'Subscriptions',
        'Podcasts',
        'Community',
        'Paid or free messaging',
        'Insights',
        'Instant payouts',
        'All customer admin handled'
      ],
      info: [
        // 'Anyone who buys a product with a single payment. Ie a course, or digital download',
        // 'Any recurring payment'
      ],
      secondGroup: [
        'Promotional codes',
        'Unlimited emails',
        'Payment plans',
      ],
      mostPopular: false,
    },
    {
      name: 'Growth' as const,
      id: 'tier-growth',
      description: 'Continue selling digital products and scale your subscription revenues',
      price: { monthly: monthlyPrices[code].Growth, annually: getMonthlyFromYearly(annualPrices[code].Growth), saving: '180' },
      href: 'https://withme.so/pricing-table',
      secondary_headers: ['Everything in Starter, plus:'],
      firstGroup: [
        'Sell as many products as you want',
        'Support up to 500 Subscriptions',
        'Automated emails that upsell subscriptions',
        'Custom domain',
        'Custom branding',
      ],
      info: [
        // 'Anyone who buys a product with a single payment. Ie a course, or digital download',
        // 'Any recurring payment'
      ],
      mostPopular: true,
    },
    {
      name: 'Pro' as const,
      id: 'tier-pro',
      description: 'Scale your digital product sales, scale your subscriptions and start doing 1:1 coaching',
      price: { monthly: monthlyPrices[code].Pro, annually: getMonthlyFromYearly(annualPrices[code].Pro), saving: '360' },
      href: 'https://withme.so/pricing-table',
      secondary_headers: ['Everything in Growth, plus:', 'Plus:'],
      firstGroup: [
        'Sell as many products as you want',
        'Support up to 1000 Subscriptions',
        '1:1 Coaching module',
        'Automated reports identifying customers ready for high ticket 1:1 coaching',
      ],
      info: [
        // 'Anyone who buys a product with a single payment. Ie a course, or digital download',
        // 'Any recurring payment'
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
      description: 'For those creators or brands who want more control and infinite growth',
      price: { monthly: '399', annually: '339', saving: '720' },
      href: 'https://withme.so/pricing-table',
      secondary_headers: ['Everything in Pro, plus:', 'Plus:'],
      firstGroup: [
        'Sell as many products as you want',
        'Unlimited Subscriptions',
        'Unlimited Storage',
        'Custom single sign-on (SSO)',
        'Priority support',
        'Advanced analytics',
        'Lower transaction fees',
        'Custom email branding',
      ],
      info: [
        // 'Anyone who buys a product with a single payment. Ie a course, or digital download',
        // 'Any recurring payment'
      ],
      secondGroup: [
        'Concierge onboarding',
        'Quarterly business reviews',
        'Dedicated customer success manager',
        'Full migration service for courses and subscriptions',
      ],
      mostPopular: false,
    },
  ]

const sections: {
  name: string;
  features: { name: string; tiers: FeatureTiers, info?: string }[];
}[] = [
    {
      name: 'Products',
      features: [
        { name: 'Customers', tiers: { Starter: 'Unlimited', Growth: 'Unlimited', Pro: 'Unlimited', Enterprise: '' }, info: 'Anyone who buys a product with a single payment. Ie a course, or digital download.' },
        { name: 'Subscriptions', tiers: { Starter: '50', Growth: '500', Pro: '1000', Enterprise: '' }, info: 'Any recurring payment' },
        { name: 'Admins', tiers: { Starter: '1', Growth: '3', Pro: '5', Enterprise: '' } },
        { name: 'Moderators', tiers: { Starter: '1', Growth: '10', Pro: '15', Enterprise: '' } },
        { name: 'Transaction fees', tiers: { Starter: '4%', Growth: '2%', Pro: '1%', Enterprise: '' } },
        { name: 'Content storage', tiers: { Starter: '10GB', Growth: '100GB', Pro: '250GB', Enterprise: '' } },
      ],
    },
    // {
    //   name: 'Features',
    //   features: [
    //     { name: 'Bulk import/export', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
    //     { name: 'In-app notifications', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
    //     { name: 'Basic moderation', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
    //     { name: 'Weekly email digest', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
    //     { name: 'Events', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
    //     { name: 'GDPR compliant', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
    //     { name: 'iOS and Android App', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
    //     { name: 'Chat spaces', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
    //     { name: 'Scheduled posts', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
    //     { name: 'Advanced reporting', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
    //     { name: 'Custom domain', tiers: { Starter: true, Growth: true, Pro: true, Enterprise: true } },
    //     { name: 'White-labeled community', tiers: { Starter: false, Growth: true, Pro: true, Enterprise: true } },
    //   ],
    // },
  ]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export function SuccessLaunch() {
  return (
    <div className="bg-white py-8 sm:py-8 mb-8 w-full">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mt-12 max-w-7xl rounded-3xl ring-1 ring-gray-200 sm:mt-16 lg:mx-0 lg:flex lg:max-w-none items-center lg:pr-3">
          <div className="p-6 sm:p-8 lg:flex-auto">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">Ensure your launch is successful</h3>
            <div className="mt-6 flex items-center gap-x-4">
              <h4 className="flex-none text-sm/6 font-semibold text-[#3C55F3]">What&apos;s included</h4>
              {/* <div className="h-px flex-auto bg-gray-100" /> */}
            </div>
            <ul role="list" className="mt-6 grid grid-cols-1 gap-3 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-4">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3 mt-2">
                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[#3C55F3]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
            <div className="rounded-2xl bg-gray-50 py-3 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-6">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Implementation Specialist</p>
                <p className="mt-4 flex items-baseline justify-center gap-x-2">
                  <span className="text-4xl font-semibold tracking-tight text-gray-900">{currencySymbol}{implementationPrices[code]}</span>
                  <span className="text-sm/6 font-semibold tracking-wide text-gray-600">{code.toUpperCase()}</span>
                </p>
                <a
                  href={getBuyLink(PRODUCT_IDS.implementation)} target='_blank'
                  className="mt-6 block w-full rounded-md bg-[#3C55F3] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#3347d1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3C55F3]"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Pricing() {
  const [frequency, setFrequency] = useState<{ value: FrequencyValue; label: string; priceSuffix: string, saving: string }>(frequencies[0]);
  const [toggleComparePlans, setToggleComparePlans] = useState(false)

  return (
    <div className="bg-transparent py-12 sm:py-12 max-w-8xl mx-16">
      <div className="mx-auto px-6 text-center lg:px-8">
        <h1 className="text-balance text-3xl font-[700] tracking-tight text-gray-950 sm:text-5xl lg:text-pretty">
          Choose the WithMe plan that&apos;s right for you.
        </h1>
        <p className="mt-6 mx-auto text-pretty text-xl text-[#42464d] sm:text-xl/8">
          No obligations, no contracts, cancel at any time.
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

      <div className="isolate mx-auto mt-12 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-12 xl:max-w-none xl:grid-cols-4">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.mostPopular ? 'ring-2 ring-[#3C55F3] relative' : 'ring-1 ring-gray-200',
              'rounded-3xl p-8', 'bg-white'
            )}
          >
            {
              tier.mostPopular && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 bg-[#3C55F3] text-white text-xs/5 font-semibold px-4 py-1 rounded-b-lg">
                  RECOMMENDED
                </span>
              )
            }
            <h3
              id={tier.id}
              className={classNames(
                tier.mostPopular ? 'text-[#3C55F3]' : 'text-[#717680]',
                'text-lg/8 font-semibold flex items-center gap-x-3',
              )}
            >
              <span>{tier.name}</span>
              {
                frequency.value === 'annually' && tier.id !== "tier-enterprise" &&
                <span className="text-xs px-1.5 py-0.5 rounded bg-slate-500 text-white">- {frequency.saving}</span>
              }
            </h3>
            <p className="mt-2 flex flex-col sm:min-h-24 justify-center">
              {tier.id === "tier-enterprise" ? (
                <span className="text-3xl font-semibold tracking-tight text-gray-900 xl:text-2xl xl:!leading-[56px]">
                  Custom Pricing
                </span>
              ) : (
                <span className="flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-gray-900">
                    {currencySymbol === 'kr' ? `${tier.price[frequency.value]}${currencySymbol}` : `${currencySymbol}${tier.price[frequency.value]}`}
                  </span>
                  <span className="text-sm/6 font-semibold text-gray-600 sm:whitespace-pre-line">{frequency.priceSuffix}</span>
                </span>
              )}
              {
                frequency.value === 'annually' && tier.id !== "tier-enterprise" &&
                // <span className="text-sm/6 font-semibold text-[#4159F2] mt-1">Saving {currencySymbol}{tier.price.saving}</span>
                <span className="text-sm/6 text-gray-600 sm:whitespace-pre-line flex items-center gap-x-1 mt-1">
                  <span className='line-through'>{currencySymbol}{tier.price.monthly} / mo</span>
                  <span> Billed annually</span>
                </span>
                // :
                // <span className="text-sm/6 font-semibold text-[#4159F2] mt-1">&nbsp;</span>
              }
            </p>
            <p className="mt-4 md:min-h-24 text-base/2">{tier.description}</p>
            <a
              href={tier.id === "tier-enterprise" ? "https://calendly.com/sdr-team-9rc/fitwith-demoig?month=2024-09" : getBuyLink(PRODUCT_IDS[tier.name.toLowerCase() as keyof typeof PRODUCT_IDS], frequency.value)}
              target="_blank"
              aria-describedby={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'bg-[#3C55F3] text-white shadow-sm hover:bg-[#3347d1]'
                  : 'text-[#3C55F3] ring-1 ring-inset ring-[#3C55F3] hover:ring-[#3347d1]',
                'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3C55F3]',
              )}
            >
              {tier.id === "tier-enterprise" ? "Talk to sales" : "Upgrade"}
            </a>
            <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600">
              {tier.secondary_headers[0] && (
                <li className="font-semibold text-gray-900">{tier.secondary_headers[0]}</li>
              )}
              {tier.firstGroup?.map((feature, index) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[#3C55F3]" />
                  {feature}
                  {tier.info && tier.info[index] &&
                    <ToolTip
                      text={tier.info[index]}
                      hover
                    />
                  }
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

      <div className="mt-24 flex justify-center">
        <button
          type="button"
          onClick={() => setToggleComparePlans(!toggleComparePlans)}
          className='flex gap-2 text-lg font-semibold border-2 border-black rounded-full px-4 py-2 duration-200 hover:bg-gray-100'
        >
          Compare plans features
          <ChevronDownIcon
            className={`w-8 duration-200 ${toggleComparePlans ? 'transform rotate-180' : ''}`}
          />
        </button>
      </div>

      <div className={`${toggleComparePlans ? 'h-fit' : 'h-0'} transition-all duration-300 overflow-hidden `}>
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-4xl px-6 text-center lg:max-w-4xl lg:px-8 mt-10 mb-12">
            <h1 className="text-balance text-2xl font-semibold tracking-tight text-gray-950 sm:text-6xl lg:text-pretty">
              Compare plans and Features
            </h1>
            <p className="mt-6 mx-auto max-w-4xl text-pretty text-md text-[#6E89AF] sm:text-xl/8">
              No obligations, no contracts, cancel at any time.
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
                      {tier.id === "tier-enterprise" ? "Talk to sales" : "Get started"}
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
                    <th scope="row" className="px-0 py-4 text-sm/6 font-normal text-gray-600 flex items-center gap-2">
                      {feature.name}
                      {feature.info &&
                        <ToolTip
                          text={feature.info}
                          hover
                          panelClassName={`${feature.name === 'Content storage' ? 'w-56' : ''}`}
                        />
                      }
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
                            <dt className="text-sm/6 font-normal text-gray-600 flex gap-2 items-center">
                              {feature.name}
                              {feature.info &&
                                <ToolTip
                                  text={feature.info}
                                  hover
                                />
                              }
                            </dt>
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
        </div>
      </div>

      <SuccessLaunch />
    </div>
  )
}
