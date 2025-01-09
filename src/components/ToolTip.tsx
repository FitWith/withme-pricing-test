import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import React, { Fragment, useState } from 'react'

interface Props {
  text: string
  icon?: JSX.Element
  hover?: boolean
}

const ToolTip: React.FC<Props> = ({ text, icon, hover = false }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    if (!hover) {
      setIsOpen(!isOpen)
    }
  }

  const hoverProps = hover ? {
    onMouseEnter: () => setIsOpen(true),
    onMouseLeave: () => setIsOpen(false)
  } : {}

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <div {...hoverProps}>
            <PopoverButton 
              className="flex items-center focus:outline-none"
              onClick={handleClick}
            >
              {icon ? icon : <InformationCircleIcon
                className="h-5 w-5 text-gray-400 hover:text-gray-500"
                aria-hidden="true"
              />}
            </PopoverButton>

            <Transition
              show={isOpen}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel static className="absolute z-10 w-48 px-2 py-1 -translate-x-1/2 bg-gray-900 rounded-md shadow-lg left-1/2 bottom-[calc(100%+0.5rem)]">
                <div className="text-sm text-white">
                  {text}
                </div>
                <div className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-gray-900" />
              </PopoverPanel>
            </Transition>
          </div>
        </>
      )}
    </Popover>
  )
}

export default ToolTip