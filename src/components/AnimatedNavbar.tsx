"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs"
import { SiLeetcode } from "react-icons/si"
import Link from "next/link"

export default function AnimatedNavbar() {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <div className="flex items-center justify-center mx-auto">
      <motion.nav
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className="relative overflow-hidden rounded-full bg-white/10 border-2 border-gray-200/20 backdrop-blur-sm"
        animate={{
          width: isExpanded ? 240 : 100, // Adjusted widths
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <ul className="relative flex items-center justify-around p-2">
          {!isExpanded ? (
            <motion.span className="text-white text-sm">Contact</motion.span>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex space-x-3" // Increased space between icons
            >
              <a href="https://github.com/mallikaakash" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all duration-300 
                transform hover:scale-110 hover:rotate-3 p-0.5 rounded-full">
                <FaGithub size={24} /> {/* Increased icon size */}
              </a>
              <a href="https://www.linkedin.com/in/aakash-mallik-82b99423b" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all duration-300 
                transform hover:scale-110 hover:rotate-3 p-0.5 rounded-full">
                <FaLinkedin size={24} />
              </a>
              <a href="https://x.com/AakashMallik9" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all duration-300 
                transform hover:scale-110 hover:rotate-3 p-0.5 rounded-full">
                <BsTwitterX size={24} />
              </a>
              <a href="mailto:aakashmallik7777@gmail.com" className="text-white hover:text-gray-300 transition-all duration-300 
                transform hover:scale-110 hover:rotate-3 p-0.5 rounded-full">
                <FaEnvelope size={24} />
              </a>
              <a href="https://leetcode.com/u/AakashMallik/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all duration-300 
                transform hover:scale-110 hover:rotate-3 p-0.5 rounded-full">
                <SiLeetcode size={24} />
              </a>
            </motion.div>
          )}
        </ul>

        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "inset 0 0 15px rgba(255, 255, 255, 0.05)",
          }}
        />
      </motion.nav>
    </div>
  )
}
