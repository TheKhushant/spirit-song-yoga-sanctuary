import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { yogaTypes, YogaType } from "@/data/yogaTypes";
import { X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const difficultyColor = {
  Beginner: "bg-primary/10 text-primary",
  Intermediate: "bg-accent/10 text-accent",
  Advanced: "bg-destructive/10 text-destructive",
};

const YogaTypesSection = () => {
  const [selected, setSelected] = useState<YogaType | null>(null);

  return (
    <SectionWrapper id="types" title="Types of Yoga" subtitle="Find the style that resonates with your journey" alternate>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {yogaTypes.map((type, i) => (
          <motion.button
            key={type.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            onClick={() => setSelected(type)}
            className="p-6 rounded-lg bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-left group"
          >
            <h3 className="font-display text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
              {type.name}
            </h3>
            <span className={`inline-block text-xs px-2 py-1 rounded-full ${difficultyColor[type.difficulty]}`}>
              {type.difficulty}
            </span>
            <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{type.description}</p>
            <span className="inline-flex items-center text-xs text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more <ChevronRight className="w-3 h-3 ml-1" />
            </span>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/30 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-xl p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto border border-border shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{selected.name} Yoga</h3>
                  <span className={`inline-block text-xs px-2 py-1 rounded-full mt-2 ${difficultyColor[selected.difficulty]}`}>
                    {selected.difficulty}
                  </span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setSelected(null)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <p className="text-muted-foreground mb-6">{selected.description}</p>
              <p className="text-sm text-muted-foreground mb-4 italic">{selected.suitable}</p>

              <h4 className="font-display font-semibold mb-2 text-foreground">Benefits</h4>
              <ul className="space-y-1 mb-6">
                {selected.benefits.map((b) => (
                  <li key={b} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {b}
                  </li>
                ))}
              </ul>

              <h4 className="font-display font-semibold mb-2 text-foreground">Key Asanas</h4>
              <div className="flex flex-wrap gap-2">
                {selected.asanas.map((a) => (
                  <span key={a} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                    {a}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default YogaTypesSection;
