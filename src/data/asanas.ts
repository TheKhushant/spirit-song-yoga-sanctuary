export interface Asana {
  name: string;
  sanskrit: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  bodyParts: string[];
  benefits: string[];
  steps: string[];
  breathing: string;
}

export const asanas: Asana[] = [
  {
    name: "Mountain Pose",
    sanskrit: "Tadasana",
    difficulty: "Beginner",
    bodyParts: ["Spine", "Legs"],
    benefits: ["Improves posture", "Strengthens legs", "Increases awareness"],
    steps: ["Stand with feet together", "Distribute weight evenly", "Engage thighs, lift kneecaps", "Lengthen spine, reach crown up", "Relax shoulders, arms by sides"],
    breathing: "Breathe deeply and steadily through the nose",
  },
  {
    name: "Tree Pose",
    sanskrit: "Vrikshasana",
    difficulty: "Beginner",
    bodyParts: ["Legs", "Brain/Mind"],
    benefits: ["Improves balance", "Strengthens ankles", "Builds focus"],
    steps: ["Stand in Tadasana", "Shift weight to left foot", "Place right foot on inner left thigh", "Bring hands to prayer or overhead", "Fix gaze on a steady point"],
    breathing: "Inhale as you raise arms, breathe steadily while holding",
  },
  {
    name: "Warrior I",
    sanskrit: "Virabhadrasana I",
    difficulty: "Beginner",
    bodyParts: ["Legs", "Arms", "Spine"],
    benefits: ["Strengthens legs and arms", "Opens hips and chest", "Builds stamina"],
    steps: ["Step right foot forward into lunge", "Back foot angled 45 degrees", "Bend front knee to 90 degrees", "Raise arms overhead", "Square hips forward"],
    breathing: "Inhale arms up, exhale deeper into the lunge",
  },
  {
    name: "Warrior II",
    sanskrit: "Virabhadrasana II",
    difficulty: "Beginner",
    bodyParts: ["Legs", "Arms"],
    benefits: ["Builds leg endurance", "Opens hips", "Strengthens shoulders"],
    steps: ["Step feet wide apart", "Turn right foot out 90 degrees", "Bend right knee over ankle", "Extend arms parallel to floor", "Gaze over right fingertips"],
    breathing: "Breathe deeply, maintain steady rhythm",
  },
  {
    name: "Downward Dog",
    sanskrit: "Adho Mukha Svanasana",
    difficulty: "Beginner",
    bodyParts: ["Arms", "Legs", "Spine"],
    benefits: ["Full body stretch", "Strengthens arms", "Calms the mind"],
    steps: ["Start on hands and knees", "Tuck toes, lift hips up and back", "Press hands firmly, spread fingers", "Straighten legs, heels toward floor", "Head between upper arms"],
    breathing: "Breathe deeply, hold for 5-10 breaths",
  },
  {
    name: "Cobra Pose",
    sanskrit: "Bhujangasana",
    difficulty: "Beginner",
    bodyParts: ["Spine", "Heart", "Lungs"],
    benefits: ["Strengthens spine", "Opens chest", "Improves circulation"],
    steps: ["Lie face down, hands under shoulders", "Press into hands, lift chest", "Keep elbows slightly bent", "Roll shoulders back and down", "Hold and breathe"],
    breathing: "Inhale as you lift, breathe steadily while holding",
  },
  {
    name: "Triangle Pose",
    sanskrit: "Trikonasana",
    difficulty: "Beginner",
    bodyParts: ["Legs", "Spine", "Digestive System"],
    benefits: ["Stretches legs and spine", "Stimulates digestion", "Reduces stress"],
    steps: ["Stand with feet wide", "Turn right foot out", "Extend arms parallel", "Reach right hand to shin or floor", "Left arm extends upward"],
    breathing: "Inhale to extend, exhale to deepen the stretch",
  },
  {
    name: "Boat Pose",
    sanskrit: "Navasana",
    difficulty: "Intermediate",
    bodyParts: ["Digestive System", "Spine"],
    benefits: ["Strengthens core", "Aids digestion", "Improves balance"],
    steps: ["Sit with knees bent", "Lean back slightly", "Lift feet off the floor", "Extend arms forward", "Straighten legs if possible"],
    breathing: "Breathe steadily, engage core on exhale",
  },
  {
    name: "Crow Pose",
    sanskrit: "Bakasana",
    difficulty: "Advanced",
    bodyParts: ["Arms", "Brain/Mind"],
    benefits: ["Builds arm strength", "Improves focus", "Builds confidence"],
    steps: ["Squat with feet close", "Place hands shoulder-width", "Bend elbows, knees on triceps", "Lean forward, lift feet", "Engage core, hold balance"],
    breathing: "Breathe steadily, don't hold the breath",
  },
  {
    name: "Child's Pose",
    sanskrit: "Balasana",
    difficulty: "Beginner",
    bodyParts: ["Spine", "Brain/Mind"],
    benefits: ["Relaxes the body", "Calms the mind", "Stretches lower back"],
    steps: ["Kneel on the floor", "Sit back on heels", "Fold forward, arms extended", "Rest forehead on the mat", "Let entire body relax"],
    breathing: "Slow deep breaths into the back body",
  },
  {
    name: "Headstand",
    sanskrit: "Sirsasana",
    difficulty: "Advanced",
    bodyParts: ["Brain/Mind", "Arms", "Spine"],
    benefits: ["Increases blood flow to brain", "Builds shoulder strength", "Boosts focus"],
    steps: ["Interlace fingers, forearms on floor", "Place crown of head in hands", "Walk feet in, lift legs", "Engage core, stack hips over shoulders", "Hold with steady breathing"],
    breathing: "Breathe calmly through the nose, stay focused",
  },
  {
    name: "Camel Pose",
    sanskrit: "Ustrasana",
    difficulty: "Intermediate",
    bodyParts: ["Spine", "Heart", "Lungs"],
    benefits: ["Opens chest and heart", "Stretches the entire front body", "Energizes"],
    steps: ["Kneel with knees hip-width", "Place hands on lower back", "Lift chest toward ceiling", "Reach hands to heels", "Let head drop back gently"],
    breathing: "Inhale to lift, exhale to deepen the backbend",
  },
];
