import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const weekPlan = [
  { day: "Monday", focus: "Sun Salutation + Standing Poses", poses: "Surya Namaskar, Warrior I & II, Triangle", duration: "30 min" },
  { day: "Tuesday", focus: "Core & Balance", poses: "Boat Pose, Tree Pose, Eagle, Plank", duration: "25 min" },
  { day: "Wednesday", focus: "Flexibility & Hip Openers", poses: "Pigeon, Butterfly, Forward Folds", duration: "30 min" },
  { day: "Thursday", focus: "Backbends & Heart Openers", poses: "Cobra, Camel, Bridge, Fish", duration: "25 min" },
  { day: "Friday", focus: "Full Body Flow", poses: "Vinyasa Flow sequence", duration: "35 min" },
  { day: "Saturday", focus: "Pranayama & Meditation", poses: "Anulom Vilom, Kapalbhati, Meditation", duration: "20 min" },
  { day: "Sunday", focus: "Rest & Restorative", poses: "Child's Pose, Legs Up Wall, Savasana", duration: "20 min" },
];

const DailyPlanSection = () => (
  <SectionWrapper id="plan" title="7-Day Yoga Challenge" subtitle="A structured weekly plan to build your practice">
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {weekPlan.map((day, i) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex flex-col sm:flex-row gap-4 p-5 rounded-lg bg-card border border-border hover:shadow-md transition-shadow"
          >
            <div className="sm:w-32 shrink-0">
              <span className="font-display font-bold text-primary">{day.day}</span>
              <p className="text-xs text-muted-foreground">{day.duration}</p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-1">{day.focus}</h4>
              <p className="text-sm text-muted-foreground">{day.poses}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default DailyPlanSection;
