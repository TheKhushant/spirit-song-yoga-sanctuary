import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { CheckCircle, XCircle, AlertCircle, Apple } from "lucide-react";

const routine = [
  "5 min — Pranayama (Deep breathing)",
  "5 min — Warm-up stretches",
  "15 min — Yoga asanas (5-6 poses)",
  "5 min — Cool-down & Savasana",
];

const dos = ["Practice on an empty stomach", "Wear comfortable clothing", "Use a yoga mat", "Stay hydrated", "Be consistent"];
const donts = ["Don't force poses", "Don't compare with others", "Avoid eating 2hrs before", "Don't skip warm-up", "Don't hold your breath"];
const mistakes = ["Ignoring proper alignment", "Skipping the warm-up", "Pushing too hard too fast", "Inconsistent practice", "Forgetting to breathe"];
const diet = ["Start with warm lemon water", "Eat light, whole foods", "Include fruits and nuts", "Avoid processed food", "Stay well hydrated"];

const BeginnerGuideSection = () => (
  <SectionWrapper id="beginner" title="Beginner's Guide" subtitle="Everything you need to start your yoga journey" alternate>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Daily Routine */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 rounded-xl bg-background border border-border"
      >
        <h3 className="font-display text-lg font-semibold mb-4 text-foreground">🧘 Daily Routine (30 min)</h3>
        <ol className="space-y-3">
          {routine.map((r, i) => (
            <li key={i} className="text-sm text-muted-foreground flex gap-3 items-center">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center shrink-0 font-semibold">{i + 1}</span>
              {r}
            </li>
          ))}
        </ol>
      </motion.div>

      {/* Diet */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="p-6 rounded-xl bg-background border border-border"
      >
        <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2 text-foreground">
          <Apple className="w-5 h-5 text-primary" /> Diet Suggestions
        </h3>
        <ul className="space-y-2">
          {diet.map((d) => (
            <li key={d} className="text-sm text-muted-foreground flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {d}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Do's */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="p-6 rounded-xl bg-background border border-border"
      >
        <h3 className="font-display text-lg font-semibold mb-4 text-foreground">✅ Do's</h3>
        <ul className="space-y-2">
          {dos.map((d) => (
            <li key={d} className="text-sm text-muted-foreground flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {d}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Don'ts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="p-6 rounded-xl bg-background border border-border"
      >
        <h3 className="font-display text-lg font-semibold mb-4 text-foreground">❌ Don'ts</h3>
        <ul className="space-y-2">
          {donts.map((d) => (
            <li key={d} className="text-sm text-muted-foreground flex items-center gap-2">
              <XCircle className="w-4 h-4 text-destructive shrink-0" /> {d}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Common Mistakes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="md:col-span-2 p-6 rounded-xl bg-background border border-border"
      >
        <h3 className="font-display text-lg font-semibold mb-4 text-foreground">
          <AlertCircle className="w-5 h-5 text-accent inline mr-2" />Common Mistakes
        </h3>
        <div className="flex flex-wrap gap-3">
          {mistakes.map((m) => (
            <span key={m} className="text-sm px-4 py-2 rounded-full bg-accent/10 text-accent">{m}</span>
          ))}
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default BeginnerGuideSection;
