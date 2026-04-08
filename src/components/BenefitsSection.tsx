import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import {
  Brain, Heart, Shield, Eye, Smile, Zap,
  Dumbbell, StretchVertical, AlignCenter,
  Apple, Stethoscope, HeartPulse,
} from "lucide-react";

const categories = [
  {
    heading: "Mental Benefits",
    color: "bg-primary/10 text-primary",
    items: [
      { icon: Brain, label: "Stress Relief", desc: "Lower cortisol and calm the nervous system" },
      { icon: Eye, label: "Sharper Focus", desc: "Improve concentration and mental clarity" },
      { icon: Smile, label: "Anxiety Reduction", desc: "Manage anxiety through mindful movement" },
      { icon: Zap, label: "Better Sleep", desc: "Achieve deeper, more restful sleep" },
    ],
  },
  {
    heading: "Physical Benefits",
    color: "bg-accent/10 text-accent",
    items: [
      { icon: Dumbbell, label: "Core Strength", desc: "Build functional strength through poses" },
      { icon: StretchVertical, label: "Flexibility", desc: "Increase range of motion and suppleness" },
      { icon: AlignCenter, label: "Better Posture", desc: "Align the spine and improve posture" },
      { icon: Shield, label: "Injury Prevention", desc: "Strengthen joints and prevent injuries" },
    ],
  },
  {
    heading: "Internal Health",
    color: "bg-sage/40 text-sage-foreground",
    items: [
      { icon: Apple, label: "Digestion", desc: "Stimulate digestive organs and metabolism" },
      { icon: Stethoscope, label: "Immunity", desc: "Boost the immune system naturally" },
      { icon: HeartPulse, label: "Heart Health", desc: "Lower blood pressure and improve circulation" },
      { icon: Heart, label: "Hormonal Balance", desc: "Regulate endocrine system function" },
    ],
  },
];

const BenefitsSection = () => (
  <SectionWrapper id="benefits" title="Health Benefits" subtitle="Yoga transforms every aspect of your wellbeing">
    <div className="space-y-16">
      {categories.map((cat, ci) => (
        <div key={cat.heading}>
          <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">{cat.heading}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cat.items.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (ci * 4 + i) * 0.05 }}
                className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 group cursor-default"
              >
                <div className={`w-12 h-12 rounded-full ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold mb-1 text-foreground">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default BenefitsSection;
