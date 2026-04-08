import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Brain, Dumbbell, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Mental Wellness",
    desc: "Yoga calms the mind, reduces anxiety, and sharpens focus through mindful breathing and meditation practices.",
  },
  {
    icon: Dumbbell,
    title: "Physical Strength",
    desc: "Build flexibility, balance, and core strength with poses that work every muscle group in the body.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Growth",
    desc: "Connect with your inner self, cultivate awareness, and discover a deeper sense of purpose and peace.",
  },
];

const AboutSection = () => (
  <SectionWrapper id="about" title="The Art of Yoga" subtitle="An ancient practice for the modern world" alternate>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-muted-foreground leading-relaxed mb-6">
          Yoga is a 5,000-year-old practice originating from ancient India. The word "Yoga" comes from
          Sanskrit, meaning "to unite" — the union of mind, body, and spirit. It encompasses physical
          postures (asanas), breathing techniques (pranayama), and meditation (dhyana).
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          In our fast-paced modern world, yoga has become more relevant than ever. It offers a sanctuary
          of calm, a way to reconnect with ourselves, and a path to holistic health that no other practice
          can match.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Whether you're seeking stress relief, physical fitness, or spiritual awakening, yoga adapts to
          meet you where you are on your journey.
        </p>
      </motion.div>

      <div className="grid gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex gap-4 p-6 rounded-lg bg-background border border-border hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <p.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-1 text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
