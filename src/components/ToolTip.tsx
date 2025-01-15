import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import React, { Fragment, ReactNode, useState } from 'react'

type Position = 'top' | 'bottom' | 'left' | 'right'

interface Props {
  text: string | JSX.Element
  icon?: JSX.Element
  hover?: boolean
  position?: Position
  children?: ReactNode
  panelClassName?: string
  textClassName?: string
  containerClassName?: string
}

const positionClasses = {
  top: 'bottom-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2',
  bottom: 'top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2',
  left: 'right-[calc(100%+0.5rem)] top-1/2 -translate-y-1/2',
  right: 'left-[calc(100%+0.5rem)] top-1/2 -translate-y-1/2'
}

const arrowClasses = {
  top: 'absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-gray-900',
  bottom: 'absolute left-1/2 bottom-full -translate-x-1/2 border-8 border-transparent border-b-gray-900',
  left: 'absolute top-1/2 left-full -translate-y-1/2 border-8 border-transparent border-l-gray-900',
  right: 'absolute top-1/2 right-full -translate-y-1/2 border-8 border-transparent border-r-gray-900'
}

const defaultPanelClasses = "px-2 py-1 bg-gray-900 rounded-md shadow-lg"
const defaultTextClasses = "text-sm text-white"

const ToolTip: React.FC<Props> = ({ 
  text, 
  icon, 
  hover = false, 
  position = 'top',
  children,
  panelClassName = '',
  textClassName = '',
  containerClassName = ''
}) => {
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
              className={`flex items-center focus:outline-none ${containerClassName}`}
              onClick={handleClick}
            >
              {children || icon || (
                <InformationCircleIcon
                  className="h-5 w-5 text-gray-400 hover:text-gray-500"
                  aria-hidden="true"
                />
              )}
            </PopoverButton>

            <Transition
              show={isOpen}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <PopoverPanel 
                static 
                className={`absolute z-10 w-48 whitespace-pre-line ${defaultPanelClasses} ${positionClasses[position]} ${panelClassName}`}
              >
                <div className={`${defaultTextClasses} ${textClassName}`}>
                  {text}
                </div>
                <div className={arrowClasses[position]} />
              </PopoverPanel>
            </Transition>
          </div>
        </>
      )}
    </Popover>
  )
}

export default ToolTip