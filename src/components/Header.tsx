import Link from "next/link"
import { useState } from "react"

const Header = () => {
  return (
    <nav className="sm:bg-gray-800 md:bg-red-500 bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center sm:flex-row flex-col">
        <div className="text-lg font-semibold">My NextJS App</div>
        <div className="flex gap-4 sm:mt-0 mt-3">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header