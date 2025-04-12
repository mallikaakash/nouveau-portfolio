"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import emailjs from "emailjs-com"

export default function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const formRef = React.useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    emailjs
      .sendForm(
        "your_service_id",      // Replace with your EmailJS service ID
        "your_template_id",     // Replace with your EmailJS template ID
        formRef.current,
        "your_user_id"          // Replace with your EmailJS user/public key
      )
      .then(
        () => {
          setSubmitted(true)
          formRef.current?.reset()
        },
        (error) => {
          console.error("FAILED...", error)
        }
      )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-md mx-auto mt-10 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 shadow-xl text-white"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Contact Me</h2>
      {submitted ? (
        <div className="text-center text-green-300">Thanks! I’ll get back to you soon.</div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-white">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-white">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-white">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="Write your message here..."
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-2 rounded-lg bg-white/20 text-white font-medium transition-all duration-300 hover:bg-white/30 border border-white/30"
          >
            Send Message
          </motion.button>
        </form>
      )}
    </motion.div>
  )
}
