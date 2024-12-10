import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-white">
      <Container>
        <div className="py-8 flex justify-center">
          <Logo className="h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">

          </nav>
        </div>

          <div className="flex justify-center pb-6">
            <p className="text-sm text-slate-500">
              Copyright &copy; {new Date().getFullYear()} WithMe. All rights
              reserved.
            </p>
          </div>
      </Container>
    </footer>
  )
}
