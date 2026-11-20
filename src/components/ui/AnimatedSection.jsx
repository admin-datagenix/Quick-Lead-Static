import { motion } from 'framer-motion'

const defaultVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  as: Tag = 'section',
  stretch = false,
}) {
  const heightClass = stretch ? 'h-full' : ''
  return (
    <Tag className={[className, heightClass].filter(Boolean).join(' ')}>
      <motion.div
        className={stretch ? 'h-full' : undefined}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{
          ...defaultVariants,
          visible: {
            ...defaultVariants.visible,
            transition: {
              ...defaultVariants.visible.transition,
              delay,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </Tag>
  )
}