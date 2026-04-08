export interface YogaType {
  name: string;
  description: string;
  benefits: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  suitable: string;
  asanas: string[];
}

export const yogaTypes: YogaType[] = [
  {
    name: "Hatha",
    description: "The foundation of all yoga styles, Hatha focuses on basic postures held for several breaths. It's a gentle introduction to yoga that builds a strong foundation.",
    benefits: ["Improves flexibility", "Builds strength", "Reduces stress", "Enhances balance"],
    difficulty: "Beginner",
    suitable: "Perfect for beginners and those seeking a gentle practice",
    asanas: ["Tadasana", "Vrikshasana", "Trikonasana", "Virabhadrasana I", "Balasana"],
  },
  {
    name: "Vinyasa",
    description: "A dynamic, flowing style that synchronizes breath with movement. Each pose flows seamlessly into the next, creating a dance-like practice.",
    benefits: ["Cardiovascular fitness", "Full-body workout", "Improves coordination", "Builds endurance"],
    difficulty: "Intermediate",
    suitable: "Those who enjoy an active, movement-based practice",
    asanas: ["Chaturanga", "Upward Dog", "Downward Dog", "Warrior II", "Crescent Lunge"],
  },
  {
    name: "Ashtanga",
    description: "A rigorous, set sequence of postures performed in the same order every time. It's physically demanding and builds internal heat.",
    benefits: ["Builds stamina", "Increases strength", "Improves discipline", "Detoxification"],
    difficulty: "Advanced",
    suitable: "Experienced practitioners seeking a challenging, structured practice",
    asanas: ["Surya Namaskar A", "Padangusthasana", "Utthita Trikonasana", "Marichyasana", "Navasana"],
  },
  {
    name: "Iyengar",
    description: "Emphasizes precise alignment using props like blocks, straps, and blankets. Poses are held for longer periods with meticulous attention to form.",
    benefits: ["Corrects alignment", "Therapeutic healing", "Builds awareness", "Injury recovery"],
    difficulty: "Beginner",
    suitable: "Anyone, especially those recovering from injuries or seeking precision",
    asanas: ["Trikonasana", "Parsvottanasana", "Salamba Sarvangasana", "Setu Bandhasana", "Viparita Karani"],
  },
  {
    name: "Kundalini",
    description: "Combines physical postures, breathing techniques, chanting, and meditation to awaken the kundalini energy at the base of the spine.",
    benefits: ["Spiritual awakening", "Emotional balance", "Nervous system health", "Increased energy"],
    difficulty: "Intermediate",
    suitable: "Those interested in the spiritual and energetic aspects of yoga",
    asanas: ["Ego Eradicator", "Sat Kriya", "Archer Pose", "Camel Pose", "Frog Pose"],
  },
  {
    name: "Bikram",
    description: "A set sequence of 26 postures performed in a heated room (105°F). The heat helps deepen stretches and promotes sweating for detoxification.",
    benefits: ["Deep flexibility", "Detoxification", "Weight loss", "Joint health"],
    difficulty: "Intermediate",
    suitable: "Those who enjoy heat and a structured, intense practice",
    asanas: ["Ardha Chandrasana", "Utkatasana", "Dandayamana Janushirasana", "Tuladandasana", "Savasana"],
  },
  {
    name: "Yin",
    description: "A slow, meditative practice where poses are held for 3-5 minutes. Targets deep connective tissues, fascia, and joints rather than muscles.",
    benefits: ["Deep flexibility", "Stress relief", "Joint mobility", "Meridian stimulation"],
    difficulty: "Beginner",
    suitable: "Anyone seeking deep relaxation and flexibility, great complement to active styles",
    asanas: ["Dragon Pose", "Butterfly", "Caterpillar", "Sleeping Swan", "Sphinx"],
  },
  {
    name: "Power",
    description: "A fitness-oriented approach derived from Ashtanga. It's fast-paced, intense, and focuses on building strength and stamina.",
    benefits: ["Muscle toning", "Calorie burning", "Core strength", "Athletic performance"],
    difficulty: "Advanced",
    suitable: "Athletes and fitness enthusiasts looking for an intense workout",
    asanas: ["Chaturanga", "Chair Pose", "Boat Pose", "Crow Pose", "Side Plank"],
  },
  {
    name: "Restorative",
    description: "Uses props to support the body in passive poses held for extended periods. Designed to activate the parasympathetic nervous system.",
    benefits: ["Deep relaxation", "Nervous system reset", "Healing support", "Better sleep"],
    difficulty: "Beginner",
    suitable: "Anyone dealing with stress, fatigue, or recovering from illness",
    asanas: ["Supported Child's Pose", "Legs Up the Wall", "Reclined Butterfly", "Supported Fish", "Savasana"],
  },
  {
    name: "Aerial",
    description: "Performed in a silk hammock suspended from the ceiling. Combines traditional yoga with elements of Pilates, dance, and acrobatics.",
    benefits: ["Spinal decompression", "Core strength", "Improved balance", "Playful creativity"],
    difficulty: "Intermediate",
    suitable: "Adventure seekers and those looking for a unique, fun practice",
    asanas: ["Aerial Inversion", "Star Pose", "Hammock Plank", "Floating Savasana", "Cocoon"],
  },
];
