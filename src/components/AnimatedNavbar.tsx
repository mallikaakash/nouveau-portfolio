"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs"
import { SiLeetcode } from "react-icons/si"

export default function AnimatedNavbar() {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <div className="flex items-center justify-center mx-auto z-50">
      <motion.nav
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className="relative overflow-hidden rounded-full bg-white/10 border-2 border-gray-200/20 backdrop-blur-sm z-50"
        animate={{
          width: isExpanded ? 260 : 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <ul className="flex items-center justify-center space-x-4 p-2  min-w-[100px]">
          {isExpanded ? (
            <>
              {[
              { href: "https://github.com/mallikaakash", Icon: FaGithub },
              { href: "https://www.linkedin.com/in/aakash-mallik-82b99423b", Icon: FaLinkedin },
              { href: "https://x.com/AakashMallik9", Icon: BsTwitterX },
              { href: "mailto:aakashmallik7777@gmail.com", Icon: FaEnvelope },
              { href: "https://leetcode.com/u/AakashMallik/", Icon: SiLeetcode }
              ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                className="text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
              >
                <Icon size={24} />
              </a>
              ))}
            </>
          ) : (
            <span className="text-white text-sm font-bold">Contact</span>
          )}
        </ul>

        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "inset 0 0 15px rgba(255, 255, 255, 0.05)",
          }}
        />
      </motion.nav>
    </div>
  )
}
