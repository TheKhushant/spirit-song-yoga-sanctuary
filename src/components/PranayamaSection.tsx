import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Wind, Clock, AlertTriangle, ChevronDown } from "lucide-react";

const techniques = [
  {
    name: "Anulom Vilom",
    subtitle: "Alternate Nostril Breathing",
    steps: ["Sit comfortably, close eyes", "Close right nostril with thumb", "Inhale through left nostril", "Close left nostril, open right", "Exhale through right", "Inhale through right, repeat"],
    benefits: ["Balances nervous system", "Reduces anxiety", "Improves lung capacity", "Clears energy channels"],
    duration: "5-15 minutes",
    precautions: ["Avoid if you have severe cold", "Do not force the breath", "Pregnant women should practice gently"],
  },
  {
    name: "Kapalbhati",
    subtitle: "Skull Shining Breath",
    steps: ["Sit tall with spine straight", "Take a deep breath in", "Exhale forcefully through nose", "Let the inhale happen passively", "Start with 30 pumps", "Gradually increase to 60-120"],
    benefits: ["Cleanses lungs", "Boosts metabolism", "Strengthens core", "Energizes the mind"],
    duration: "3-10 minutes",
    precautions: ["Avoid during pregnancy", "Not for those with high BP", "Skip during menstruation"],
  },
  {
    name: "Bhramari",
    subtitle: "Bee Breathing",
    steps: ["Sit with eyes closed", "Place index fingers on ear cartilage", "Take a deep breath in", "While exhaling, make a humming sound", "Feel the vibration in your head", "Repeat 5-7 times"],
    benefits: ["Instant calm", "Reduces anger and anxiety", "Helps with insomnia", "Improves concentration"],
    duration: "5-10 minutes",
    precautions: ["Do not practice lying down", "Avoid if you have ear infections"],
  },
  {
    name: "Ujjayi",
    subtitle: "Ocean Breath",
    steps: ["Sit comfortably or practice during asanas", "Slightly constrict the back of the throat", "Inhale through nose, creating ocean sound", "Exhale through nose with same constriction", "Keep breaths long and even", "Maintain throughout your practice"],
    benefits: ["Regulates body temperature", "Improves focus", "Builds internal heat", "Calms the mind"],
    duration: "Throughout yoga practice",
    precautions: ["Don't force the constriction", "Ease off if feeling dizzy", "Learn from an instructor first"],
  },
];

const PranayamaSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SectionWrapper id="pranayama" title="Pranayama" subtitle="Master the art of breath control" alternate>
      <div className="max-w-3xl mx-auto space-y-4">
        {techniques.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-all text-left flex justify-between items-center"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.subtitle}</p>
              </div>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 border border-t-0 border-border rounded-b-xl bg-background space-y-6">
                    <div>
                      <h4 className="font-display font-semibold mb-2 text-foreground">Steps</h4>
                      <ol className="space-y-2">
                        {tech.steps.map((s, si) => (
                          <li key={si} className="text-sm text-muted-foreground flex gap-3">
                            <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center shrink-0 font-semibold">
                              {si + 1}
                            </span>
                            {s}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{tech.duration}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-display font-semibold mb-2 flex items-center gap-2 text-foreground">
                        <Wind className="w-4 h-4 text-primary" /> Benefits
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-1">
                        {tech.benefits.map((b) => (
                          <li key={b} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-display font-semibold mb-2 flex items-center gap-2 text-foreground">
                        <AlertTriangle className="w-4 h-4 text-accent" /> Precautions
                      </h4>
                      <ul className="space-y-1">
                        {tech.precautions.map((p) => (
                          <li key={p} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" /> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PranayamaSection;
