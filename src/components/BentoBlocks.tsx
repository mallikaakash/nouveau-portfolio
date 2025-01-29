"use client"

import { motion } from "framer-motion"
import { Code, Lightbulb, Rocket, Zap, Palette, Music, Camera, Coffee } from "lucide-react"

const blockVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}

// export const CodingBlock = () => (
//   <motion.div
//     className="p-4 rounded-lg shadow-lg bg-blue-200 flex flex-col items-center justify-center text-center"
//     variants={blockVariants}
//     whileHover="hover"
//     whileTap="tap"
//   >
//     <Code className="w-6 h-6 mb-4" />
//     <h2 className="text-xl font-semibold">Coding</h2>
//     <motion.div className="mt-2 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
//       {"<code>Hell!</code>"}
//     </motion.div>
//   </motion.div>
// )

export const IdeasBlock = () => (
  <motion.div
    className="p-4 rounded-lg shadow-lg bg-[#DBA979]/50 flex flex-col items-center justify-center text-center "
    variants={blockVariants}
    whileHover="hover"
    whileTap="tap"
  >
    <Lightbulb className="w-6 h-6 mb-4" />
    <h2 className="text-xl font-semibold">Research Papers</h2>
    {/* <motion.div
      className="mt-2"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    >
      💡
    </motion.div> */}
  </motion.div>
)

export const LaunchBlock = () => (
  <motion.div
    className="p-4 rounded-lg shadow-lg bg-[#FFE6A9] flex flex-col items-center justify-center text-center"
    variants={blockVariants}
    whileHover="hover"
    whileTap="tap"
  >
    <Rocket className="w-6 h-6 mb-4" />
    <h2 className="text-xl font-semibold">Projects</h2>
    {/* <motion.div
      className="mt-2"
      initial={{ y: 0 }}
      animate={{ y: -10 }}
      transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
    >
      🚀
    </motion.div> */}
  </motion.div>
)

export const EnergyBlock = () => (
  <motion.div
    className="p-4 rounded-lg shadow-lg bg-[#F0EBE3] flex flex-col items-center justify-center text-center"
    variants={blockVariants}
    whileHover="hover"
    whileTap="tap"
  >
    <Zap className="w-6 h-6 mb-4" />
    <h2 className="text-xl font-semibold">Knowledge Stash</h2>
    {/* <motion.div
      className="mt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
    >
      ⚡
    </motion.div> */}
  </motion.div>
)

export const DesignBlock = () => (
  <motion.div
    className="p-4 rounded-lg shadow-lg bg-[#A59D84]/50 flex flex-col items-center justify-center text-center"
    variants={blockVariants}
    whileHover="hover"
    whileTap="tap"
  >
    <Palette className="w-6 h-6 mb-4" />
    <h2 className="text-xl font-semibold">Writing</h2>
    {/* <motion.div
      className="mt-2 flex space-x-1"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <span className="w-4 h-4 bg-red-500 rounded-full"></span>
      <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
      <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
    </motion.div> */}
  </motion.div>
)

// export const MusicBlock = () => (
//   <motion.div
//     className="p-4 rounded-lg shadow-lg bg-pink-200 flex flex-col items-center justify-center text-center"
//     variants={blockVariants}
//     whileHover="hover"
//     whileTap="tap"
//   >
//     <Music className="w-6 h-6 mb-4" />
//     <h2 className="text-xl font-semibold">Music</h2>
//     <motion.div
//       className="mt-2 flex space-x-1"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.5 }}
//     >
//       {[1, 2, 3].map((i) => (
//         <motion.span
//           key={i}
//           className="w-1 h-4 bg-pink-500 rounded-full"
//           animate={{ height: [4, 16, 4] }}
//           transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
//         ></motion.span>
//       ))}
//     </motion.div>
//   </motion.div>
// )

// export const PhotosBlock = () => (
//   <motion.div
//     className="p-4 rounded-lg shadow-lg bg-indigo-200 flex flex-col items-center justify-center text-center"
//     variants={blockVariants}
//     whileHover="hover"
//     whileTap="tap"
//   >
//     <Camera className="w-6 h-6 mb-4" />
//     <h2 className="text-xl font-semibold">Photos</h2>
//     <motion.div
//       className="mt-2"
//       initial={{ opacity: 0, rotate: -10 }}
//       animate={{ opacity: 1, rotate: 0 }}
//       transition={{ delay: 0.5, duration: 0.5 }}
//     >
//       📸
//     </motion.div>
//   </motion.div>
// )

// export const CoffeeBlock = () => (
//   <motion.div
//     className="p-4 rounded-lg shadow-lg bg-orange-200 flex flex-col items-center justify-center text-center"
//     variants={blockVariants}
//     whileHover="hover"
//     whileTap="tap"
//   >
//     <Coffee className="w-6 h-6 mb-4" />
//     <h2 className="text-xl font-semibold">Coffee</h2>
//     <motion.div
//       className="mt-2"
//       initial={{ y: -5 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
//     >
//       ☕
//     </motion.div>
//   </motion.div>
// )

