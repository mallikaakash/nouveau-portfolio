"use client"

import { motion } from "framer-motion"
import {
  PapersBlock,
  ProjectBlock,
  StashBlock,
  WritingBlock,
  // MusicBlock,
  // PhotosBlock,
  // CoffeeBlock,
} from "./BentoBlocks"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const getDirectionVariants = (index: number) => {
  const directions = ["left", "right", "top", "bottom"]
  const direction = directions[index % directions.length]

  return {
    hidden: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
      },
    },
  }
}

export default function AnimatedBentoGrid() {
  return (
    <motion.div
      className="grid grid-cols-2 grid-rows-2 md:grid-cols-2 gap-4 max-w-4xl md:w-2/3 md:mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* <motion.div variants={getDirectionVariants(0)}>
        <CodingBlock />
      </motion.div> */}
      <motion.div variants={getDirectionVariants(1)}>
        <PapersBlock />
      </motion.div>
      <motion.div variants={getDirectionVariants(2)}>
        <ProjectBlock />
      </motion.div>
      <motion.div variants={getDirectionVariants(3)}>
        <StashBlock />
      </motion.div>
      <motion.div variants={getDirectionVariants(4)}>
        <WritingBlock />
      </motion.div>
      {/* <motion.div variants={getDirectionVariants(5)}>
        <MusicBlock />
      </motion.div>
      <motion.div variants={getDirectionVariants(6)}>
        <PhotosBlock />
      </motion.div>
      <motion.div variants={getDirectionVariants(7)}>
        <CoffeeBlock />
      </motion.div> */}
    </motion.div>
  )
}

