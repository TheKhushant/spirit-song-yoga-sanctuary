import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  alternate?: boolean;
}

const SectionWrapper = ({ id, title, subtitle, children, className = "", alternate }: Props) => (
  <section id={id} className={`section-padding ${alternate ? "bg-card" : "bg-background"} ${className}`}>
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{subtitle}</p>
        )}
        <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
      </motion.div>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
