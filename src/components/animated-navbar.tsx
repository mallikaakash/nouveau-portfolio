"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Briefcase, Info } from "lucide-react"

export default function AnimatedNavbar() {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState("work")

  return (
    <div className="flex items-center justify-center my-4 mx-auto">
      <motion.nav
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className="relative overflow-hidden rounded-full bg-neutral-900/0 border-2 border-yellow-950/50 p-2 backdrop-blur-sm"
        animate={{
          width: isExpanded ? 300 : 120,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {/* Navigation items */}
        <ul
          className="relative flex items-center justify-around gap-4 px-4 text-sm font-medium"
          style={{ color: "#ffffff" }}
        >
          <motion.li
            className="relative flex cursor-pointer items-center gap-2 py-1"
            onClick={() => setActiveTab("work")}
          >
            {/* Spotlight effect for active tab */}
            {activeTab === "work" && (
              <motion.div
                className="absolute inset-0 -z-10 rounded-full"
                layoutId="spotlight"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                style={{
                  background: `radial-gradient(
                    circle at center,
                    rgba(243, 240, 233, 0.15),
                    rgba(243, 240, 233, 0.05) 40%,
                    transparent 70%
                  )`,
                }}
              />
            )}
            <Briefcase className="h-4 w-4 text-yellow-500" />
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden whitespace-nowrap text-yellow-500"
            >
              Work
            </motion.span>
          </motion.li>

          <motion.li
            className="relative flex cursor-pointer items-center gap-2 py-1"
            onClick={() => setActiveTab("info")}
          >
            {/* Spotlight effect for active tab */}
            {activeTab === "info" && (
              <motion.div
                className="absolute inset-0 -z-10 rounded-full"
                layoutId="spotlight"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                style={{
                  background: `radial-gradient(
                    circle at center,
                    rgba(243, 240, 233, 0.15),
                    rgba(243, 240, 233, 0.05) 40%,
                    transparent 70%
                  )`,
                }}
              />
            )}
            <Info className="h-4 w-4 text-yellow-500" />
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden whitespace-nowrap text-yellow-500" 
            >
              Info
            </motion.span>
          </motion.li>
        </ul>

        {/* Border */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid rgba(243, 240, 233, 0.1)",
            boxShadow: "inset 0 0 15px rgba(243, 240, 233, 0.05)",
          }}
        />
      </motion.nav>
    </div>
  )
}

