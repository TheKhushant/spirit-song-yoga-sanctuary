import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ChevronLeft, ChevronRight, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Step {
  name: string;
  sanskrit: string;
  description: string;
  breathing: "Inhale" | "Exhale" | "Hold";
  emoji: string;
}

const steps: Step[] = [
  { name: "Prayer Pose", sanskrit: "Pranamasana", description: "Stand at the edge of the mat, feet together. Bring palms together in prayer position at heart center.", breathing: "Exhale", emoji: "🙏" },
  { name: "Raised Arms Pose", sanskrit: "Hasta Uttanasana", description: "Lift arms up and back, biceps close to ears. Stretch the whole body from heels to fingertips.", breathing: "Inhale", emoji: "🙌" },
  { name: "Hand to Foot Pose", sanskrit: "Padahastasana", description: "Bend forward from the waist, keeping spine straight. Bring hands to the floor beside feet.", breathing: "Exhale", emoji: "🙇" },
  { name: "Equestrian Pose", sanskrit: "Ashwa Sanchalanasana", description: "Push right leg back as far as possible. Right knee on the floor, look up.", breathing: "Inhale", emoji: "🏇" },
  { name: "Stick Pose", sanskrit: "Dandasana", description: "Take the left leg back, body in a straight line. Keep arms perpendicular to the floor.", breathing: "Hold", emoji: "📏" },
  { name: "Eight-Limbed Salute", sanskrit: "Ashtanga Namaskar", description: "Lower knees, chest, and chin to the floor. Keep hips slightly raised. Eight points touch the floor.", breathing: "Exhale", emoji: "🫳" },
  { name: "Cobra Pose", sanskrit: "Bhujangasana", description: "Slide forward, raise chest into cobra. Keep elbows slightly bent, shoulders away from ears.", breathing: "Inhale", emoji: "🐍" },
  { name: "Mountain Pose", sanskrit: "Parvatasana", description: "Lift hips up, forming an inverted V. Press heels toward the floor, head between arms.", breathing: "Exhale", emoji: "⛰️" },
  { name: "Equestrian Pose", sanskrit: "Ashwa Sanchalanasana", description: "Bring right foot forward between hands. Left knee on the floor, look up.", breathing: "Inhale", emoji: "🏇" },
  { name: "Hand to Foot Pose", sanskrit: "Padahastasana", description: "Bring left foot forward. Palms on the floor, straighten knees if comfortable.", breathing: "Exhale", emoji: "🙇" },
  { name: "Raised Arms Pose", sanskrit: "Hasta Uttanasana", description: "Roll spine up, stretch arms overhead and back, pushing hips slightly outward.", breathing: "Inhale", emoji: "🙌" },
  { name: "Prayer Pose", sanskrit: "Pranamasana", description: "Straighten the body, bring arms down. Return to the starting prayer position.", breathing: "Exhale", emoji: "🙏" },
];

const breathColor = { Inhale: "text-primary", Exhale: "text-accent", Hold: "text-muted-foreground" };

const SuryaNamaskarSection = () => {
  const [current, setCurrent] = useState(0);
  const step = steps[current];

  return (
    <SectionWrapper id="surya" title="Surya Namaskar" subtitle="The Sun Salutation — 12 powerful steps to energize your day">
      {/* Step indicators */}
      <div className="flex justify-center gap-1 mb-8 flex-wrap">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-8 h-8 rounded-full text-xs font-semibold transition-all duration-300 ${
              i === current
                ? "bg-primary text-primary-foreground scale-110"
                : "bg-secondary text-secondary-foreground hover:bg-primary/20"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Step Card */}
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="text-6xl mb-6 animate-breathe">{step.emoji}</div>
            <p className="text-sm text-muted-foreground mb-1">Step {current + 1} of 12</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-1 text-foreground">{step.name}</h3>
            <p className="text-sm text-muted-foreground italic mb-6">{step.sanskrit}</p>
            <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary ${breathColor[step.breathing]}`}>
              <Wind className="w-4 h-4" />
              <span className="font-semibold text-sm">{step.breathing}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={() => setCurrent((p) => (p === 0 ? steps.length - 1 : p - 1))}
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Previous
          </Button>
          <Button
            variant="hero"
            onClick={() => setCurrent((p) => (p === steps.length - 1 ? 0 : p + 1))}
          >
            Next <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SuryaNamaskarSection;
