import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-yoga.jpg";
import { Calendar, Mail } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Yoga meditation at sunrise"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

    <div className="relative z-10 container mx-auto text-center px-4">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm md:text-base tracking-[0.3em] uppercase text-primary font-medium mb-4"
      >
        Find Your Inner Peace
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-foreground"
      >
        Spirit Song Yoga
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
      >
        Balance Your Mind, Body &amp; Soul through the ancient wisdom of yoga,
        breathing, and meditation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button variant="hero" size="lg" asChild>
          <a href="#contact" className="inline-flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Book an Appointment
          </a>
        </Button>
        <Button variant="sun" size="lg" asChild>
          <a href="mailto:lalaninevin46@gmail.com" className="inline-flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email
          </a>
        </Button>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center pt-2">
        <div className="w-1.5 h-3 bg-primary/60 rounded-full" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;