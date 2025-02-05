"use client"

import { motion } from "framer-motion"
import { Code, Lightbulb, Rocket, Zap, Palette, Music, Camera, Coffee } from "lucide-react"

const blockVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}

export const PapersBlock = () => (
  <motion.div
    className="p-3 rounded-lg shadow-lg bg-[#DBA979]/50 flex flex-col items-center justify-center text-center "
    variants={blockVariants}
    whileHover="hover"
    whileTap="tap"
    onClick={() => window.location.href = '/papers'}
  >
    <Lightbulb className="w-6 h-6 mb-4" />
    <h2 className="text-lg font-semibold">Research Papers</h2>

  </motion.div>
)

export const ProjectBlock = () => (
  <motion.div
    className="p-3 rounded-lg shadow-lg bg-[#FFE6A9] flex flex-col items-center justify-center text-center"
    variants={blockVariants}
    whileHover="hover"
    whileTap="tap"
    onClick={() => window.location.href = '/projects'}
  >
    <Rocket className="w-6 h-6 mb-4" />
    <h2 className="text-lg font-semibold">Projects</h2>

  </motion.div>
)

export const WritingBlock = () => (
  <motion.div
    className="p-3 rounded-lg shadow-lg bg-[#A59D84]/50 flex flex-col items-center justify-center text-center"
    variants={blockVariants}
    whileHover="hover"
    whileTap="tap"
    onClick={() => window.location.href = '/writing'}
  >
    <Palette className="w-6 h-6 mb-4" />
    <h2 className="text-lg font-semibold">Writing</h2>
  
  </motion.div>
)

export const StashBlock = () => (
  <motion.div
    className="p-3 rounded-lg shadow-lg bg-[#F0EBE3] flex flex-col items-center justify-center text-center"
    variants={blockVariants}
    whileHover="hover"
    whileTap="tap"
    onClick={() => window.location.href = '/knowledge_stash'}

  >
    <Zap className="w-6 h-6 mb-4" />
    <h2 className="text-lg font-semibold">Ad-hoc Info Dump</h2>
   
  </motion.div>
)

