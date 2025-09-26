import React from 'react'

import LinkAnimation from './LinkAnimation'

export default function Navigation() {
  return (
    <nav className="w-full fixed top-0 left-0 right-0 container mx-auto py-5 flex flex-row items-center justify-between">
      <h1 className="text-3xl tracking-tight font-bold text-neutral-900">Volunote</h1>
      <div className="text-xl flex flex-row gap-4 font-medium text-neutral-800">
        <LinkAnimation href="/" label="Home" />
        <LinkAnimation href="/about" label="About" />
        <LinkAnimation href="/contact" label="Contact" />
      </div>
    </nav>
  )
}
