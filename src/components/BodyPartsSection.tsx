import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { asanas } from "@/data/asanas";
import { Brain, Hand, Footprints, Bone, Heart, Wind, Apple } from "lucide-react";

const bodyParts = [
  { label: "Brain/Mind", icon: Brain },
  { label: "Arms", icon: Hand },
  { label: "Legs", icon: Footprints },
  { label: "Spine", icon: Bone },
  { label: "Heart", icon: Heart },
  { label: "Lungs", icon: Wind },
  { label: "Digestive System", icon: Apple },
];

const BodyPartsSection = () => {
  const [active, setActive] = useState<string | null>(null);
  const related = active ? asanas.filter((a) => a.bodyParts.includes(active)) : [];

  return (
    <SectionWrapper id="bodyparts" title="Yoga by Body Part" subtitle="Target specific areas of your body" alternate>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {bodyParts.map((bp) => (
          <motion.button
            key={bp.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActive(active === bp.label ? null : bp.label)}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 min-w-[100px] ${
              active === bp.label
                ? "border-primary bg-primary/10 shadow-md"
                : "border-border bg-background hover:border-primary/30"
            }`}
          >
            <bp.icon className={`w-6 h-6 ${active === bp.label ? "text-primary" : "text-muted-foreground"}`} />
            <span className={`text-xs font-medium ${active === bp.label ? "text-primary" : "text-muted-foreground"}`}>
              {bp.label}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {related.map((a) => (
              <div key={a.name} className="p-5 rounded-lg bg-background border border-border">
                <h4 className="font-display font-semibold text-foreground">{a.name}</h4>
                <p className="text-xs text-muted-foreground italic">{a.sanskrit}</p>
                <ul className="mt-2 space-y-1">
                  {a.benefits.map((b) => (
                    <li key={b} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {related.length === 0 && (
              <p className="col-span-full text-center text-muted-foreground py-8">No poses found for this body part.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {!active && (
        <p className="text-center text-muted-foreground">Select a body part above to see related yoga poses.</p>
      )}
    </SectionWrapper>
  );
};

export default BodyPartsSection;
