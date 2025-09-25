import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-6 text-center border-t border-border"
    >
      <div className="max-w-4xl mx-auto">
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-testid="text-footer"
        >
          © {new Date().getFullYear()} Hemnath. Built with Next.js, React, and Tailwind CSS.
        </motion.p>
      </div>
    </motion.footer>
  );
}