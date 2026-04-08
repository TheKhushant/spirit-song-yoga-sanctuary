import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const types = [
  { name: "Mindfulness", desc: "Focus on the present moment without judgment. Observe thoughts as they arise and let them pass." },
  { name: "Loving-Kindness", desc: "Cultivate feelings of love and compassion toward yourself and others through repeated phrases." },
  { name: "Body Scan", desc: "Systematically focus attention on different parts of the body, releasing tension as you go." },
  { name: "Transcendental", desc: "Use a personal mantra repeated silently to settle the mind into a state of restful awareness." },
];

const beginnerSteps = [
  "Find a quiet, comfortable spot",
  "Sit with a straight but relaxed spine",
  "Close your eyes gently",
  "Focus on your natural breathing",
  "When the mind wanders, gently return to the breath",
  "Start with 5 minutes, gradually increase",
  "Practice at the same time daily",
];

const MeditationSection = () => (
  <SectionWrapper id="meditation" title="Meditation" subtitle="Still the mind, awaken the soul">
    <div className="grid lg:grid-cols-2 gap-12">
      <div>
        <h3 className="font-display text-xl font-semibold mb-6 text-foreground">Types of Meditation</h3>
        <div className="space-y-4">
          {types.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-5 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
            >
              <h4 className="font-display font-semibold mb-1 text-foreground">{t.name}</h4>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-display text-xl font-semibold mb-6 text-foreground">Beginner's Guide</h3>
        <div className="p-8 rounded-xl bg-card border border-border">
          <ol className="space-y-4">
            {beginnerSteps.map((s, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center shrink-0 font-semibold">
                  {i + 1}
                </span>
                <p className="text-muted-foreground pt-1">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default MeditationSection;
