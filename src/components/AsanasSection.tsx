import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { asanas, Asana } from "@/data/asanas";
import { X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const difficultyColor = {
  Beginner: "bg-primary/10 text-primary",
  Intermediate: "bg-accent/10 text-accent",
  Advanced: "bg-destructive/10 text-destructive",
};

const AsanasSection = () => {
  const [selected, setSelected] = useState<Asana | null>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("All");

  const filtered = asanas.filter((a) => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.sanskrit.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || a.difficulty === filter;
    return matchSearch && matchFilter;
  });

  return (
    <SectionWrapper id="asanas" title="Yoga Asanas" subtitle="Explore poses for every level">
      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search poses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {["All", "Beginner", "Intermediate", "Advanced"].map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((asana, i) => (
          <motion.button
            key={asana.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            onClick={() => setSelected(asana)}
            className="p-5 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all text-left group"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                {asana.name}
              </h3>
              <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyColor[asana.difficulty]}`}>
                {asana.difficulty}
              </span>
            </div>
            <p className="text-xs text-muted-foreground italic mb-2">{asana.sanskrit}</p>
            <div className="flex flex-wrap gap-1">
              {asana.bodyParts.map((bp) => (
                <span key={bp} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                  {bp}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No poses found. Try a different search.</p>
      )}

      {/* Detail Modal */}
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
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{selected.name}</h3>
                  <p className="text-sm text-muted-foreground italic">{selected.sanskrit}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setSelected(null)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <span className={`inline-block text-xs px-2 py-1 rounded-full mb-4 ${difficultyColor[selected.difficulty]}`}>
                {selected.difficulty}
              </span>

              <h4 className="font-display font-semibold mb-2 text-foreground">Steps</h4>
              <ol className="space-y-2 mb-6">
                {selected.steps.map((s, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center shrink-0 font-semibold">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>

              <h4 className="font-display font-semibold mb-2 text-foreground">Breathing</h4>
              <p className="text-sm text-muted-foreground mb-6 p-3 rounded-lg bg-sage/20 border border-sage/30">
                🌬️ {selected.breathing}
              </p>

              <h4 className="font-display font-semibold mb-2 text-foreground">Benefits</h4>
              <ul className="space-y-1">
                {selected.benefits.map((b) => (
                  <li key={b} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default AsanasSection;
