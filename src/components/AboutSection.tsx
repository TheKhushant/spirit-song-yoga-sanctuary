import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Brain, Dumbbell, Sparkles, Trophy, Award, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    icon: Brain,
    title: "Mental Wellness",
    desc: "Yoga calms the mind, reduces anxiety, and sharpens focus through mindful breathing and meditation practices.",
  },
  {
    icon: Dumbbell,
    title: "Physical Strength",
    desc: "Build flexibility, balance, and core strength with poses that work every muscle group in the body.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Growth",
    desc: "Connect with your inner self, cultivate awareness, and discover a deeper sense of purpose and peace.",
  },
];

// Sample portrait images - replace with your actual image URLs
const portraitImages = [
  {
    id: 1,
    url: "/yogaPh/p1.png",
    name: "Mountain Pose",
  },
  {
    id: 2,
    url: "/yogaPh/p2.png",
    name: "Warrior Pose",
  },
  {
    id: 3,
    url: "/yogaPh/p3.png",
    name: "Tree Pose",
  },
  {
    id: 4,
    url: "/yogaPh/p4.png",
    name: "Meditation",
  },
  {
    id: 5,
    url: "/yogaPh/p5.png",
    name: "Lotus Pose",
  },
  {
    id: 6,
    url: "https://cdn.yogajournal.com/wp-content/uploads/2021/11/Downward-Facing-Dog-Pose_Andrew-Clark_SQ.jpeg",
    name: "Downward Dog",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=1200&fit=crop",
    name: "Cobra Pose",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&h=1200&fit=crop",
    name: "Bridge Pose",
  },
  {
    id: 9,
    url: "/yogaPh/banner.jpeg",
    name: "Pose",
  },
  {
    id: 10,
    url: "/yogaPh/img1.png",
    name: "Pose",
  },
  {
    id: 11,
    url: "/yogaPh/img2.png",
    name: "Pose",
  },
  {
    id: 12,
    url: "/yogaPh/cover.png",
    name: "Pose",
  },
  {
    id: 13,
    url: "/yogaPh/img3.png",
    name: "Pose",
  },
  {
    id: 14,
    url: "/yogaPh/img4.png",
    name: "Pose",
  },
  {
    id: 15,
    url: "/yogaPh/img5.png",
    name: "Pose",
  },
  {
    id: 16,
    url: "/yogaPh/img6.png",
    name: "Pose",
  },
  {
    id: 17,
    url: "/yogaPh/img7.png",
    name: "Pose",
  },
  {
    id: 18,
    url: "https://cdn.yogajournal.com/wp-content/uploads/2021/10/YJ_Mountain-Pose_Andrew-Clark_Square.png",
    name: "Mountain Pose",
  },
  {
    id: 19,
    url: "https://cdn.yogajournal.com/wp-content/uploads/2021/10/Warrior-1-Pose_Andrew-Clark_2400x1350.jpeg",
    name: "Warrior Pose",
  },
  {
    id: 20,
    url: "https://cdn.yogajournal.com/wp-content/uploads/2022/01/Tree-Pose_Alt-1_SQ_Andrew-Clark.jpeg",
    name: "Tree Pose",
  },
  {
    id: 21,
    url: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800&h=1200&fit=crop",
    name: "Meditation",
  },
  {
    id: 22,
    url: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&h=1200&fit=crop",
    name: "Lotus Pose",
  },
];

// Achievement images from public/achivement/ folder
const achievementsImages = [
  
  { id: 1, url: "/achivement/achiv1.jpeg", title: "Yoga Excellence Award", year: "2024" },
  { id: 1, url: "/achivement/achiv2.jpeg", title: "Yoga Excellence Award", year: "2024" },
  { id: 2, url: "/achivement/achiv3.jpeg", title: "Wellness Leadership", year: "2023" },
  { id: 3, url: "/achivement/achiv4.jpeg", title: "Best Yoga Instructor", year: "2023" },
  { id: 4, url: "/achivement/achiv5.jpeg", title: "Community Impact", year: "2022" },
  { id: 5, url: "/achivement/achiv6.jpeg", title: "International Recognition", year: "2022" },
  { id: 6, url: "/achivement/achiv7.jpeg", title: "Yoga Innovation Award", year: "2021" },
  { id: 7, url: "/achivement/achiv8.jpeg", title: "Spiritual Leadership", year: "2021" },
  { id: 8, url: "/achivement/achiv9.jpeg", title: "Health & Wellness Award", year: "2020" },
  { id: 9, url: "/achivement/achiv10.jpeg", title: "Mindfulness Champion", year: "2020" },
  { id: 10, url: "/achivement/achiv11.jpeg", title: "Yoga Master Award", year: "2019" },
  { id: 11, url: "/achivement/achiv12.png", title: "Excellence in Teaching", year: "2019" },
  { id: 12, url: "/achivement/achiv13.jpeg", title: "Holistic Health Award", year: "2018" },
  { id: 13, url: "/achivement/achiv14.jpeg", title: "Best Wellness Program", year: "2018" },
  { id: 14, url: "/achivement/achiv15.jpeg", title: "Yoga Icon Award", year: "2017" },
  { id: 15, url: "/achivement/achiv16.jpeg", title: "Peace Ambassador", year: "2017" },
  { id: 16, url: "/achivement/achiv17.jpeg", title: "Global Yoga Award", year: "2016" },
  { id: 17, url: "/achivement/achiv18.jpeg", title: "Lifetime Achievement", year: "2016" },
  { id: 18, url: "/achivement/minister.png", title: "Legacy Award", year: "2015" },
];

// Duplicate images for seamless infinite scroll
const duplicatedImages = [...portraitImages, ...portraitImages, ...portraitImages];
const duplicatedAchievements = [...achievementsImages, ...achievementsImages, ...achievementsImages];

const AboutSection = () => {
  // Refs for both scroll containers
  const yogaScrollRef = useRef<HTMLDivElement>(null);
  const achievementsScrollRef = useRef<HTMLDivElement>(null);
  const yogaAnimationRef = useRef<number | null>(null);
  const achievementsAnimationRef = useRef<number | null>(null);
  
  const [isYogaHovered, setIsYogaHovered] = useState(false);
  const [isAchievementsHovered, setIsAchievementsHovered] = useState(false);
  
  const yogaScrollSpeed = 0.5;
  const achievementsScrollSpeed = 0.6;

  // Scroll hook for yoga images
  useEffect(() => {
    const scrollContainer = yogaScrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = scrollContainer.scrollLeft;
    let lastTimestamp = 0;
    
    const animateScroll = (timestamp: number) => {
      if (!scrollContainer) return;
      
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
        yogaAnimationRef.current = requestAnimationFrame(animateScroll);
        return;
      }
      
      const delta = Math.min(timestamp - lastTimestamp, 100) / 16.67;
      lastTimestamp = timestamp;
      
      if (!isYogaHovered) {
        scrollPosition += yogaScrollSpeed * delta;
        const maxScroll = scrollContainer.scrollWidth / 3;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = scrollPosition;
        }
      } else {
        scrollPosition = scrollContainer.scrollLeft;
      }
      
      yogaAnimationRef.current = requestAnimationFrame(animateScroll);
    };
    
    yogaAnimationRef.current = requestAnimationFrame(animateScroll);
    
    return () => {
      if (yogaAnimationRef.current) cancelAnimationFrame(yogaAnimationRef.current);
    };
  }, [isYogaHovered, yogaScrollSpeed]);

  // Scroll hook for achievements
  useEffect(() => {
    const scrollContainer = achievementsScrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = scrollContainer.scrollLeft;
    let lastTimestamp = 0;
    let animationId: number | null = null;
    
    const animateScroll = (timestamp: number) => {
      if (!scrollContainer) return;
      
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
        animationId = requestAnimationFrame(animateScroll);
        return;
      }
      
      const delta = Math.min(timestamp - lastTimestamp, 100) / 16.67;
      lastTimestamp = timestamp;
      
      if (!isAchievementsHovered) {
        scrollPosition += achievementsScrollSpeed * delta;
        const maxScroll = scrollContainer.scrollWidth / 3;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = scrollPosition;
        }
      } else {
        scrollPosition = scrollContainer.scrollLeft;
      }
      
      animationId = requestAnimationFrame(animateScroll);
    };
    
    animationId = requestAnimationFrame(animateScroll);
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isAchievementsHovered, achievementsScrollSpeed]);

  return (
    <SectionWrapper id="about" title="The Art of Yoga" subtitle="An ancient practice for the modern world" alternate>
      {/* Achievements Auto-Scroll Section */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-3">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Our Achievements</span>
          </div>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
            Awards & Recognition
          </h3>
          <p className="text-sm text-muted-foreground">Celebrating milestones in our wellness journey</p>
        </motion.div>

        <div
          ref={achievementsScrollRef}
          className="overflow-x-hidden cursor-grab active:cursor-grabbing relative"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => setIsAchievementsHovered(true)}
          onMouseLeave={() => setIsAchievementsHovered(false)}
        >
          <div className="flex gap-4 md:gap-6 pb-4">
            {duplicatedAchievements.map((item, index) => (
              <motion.div
                key={`achievement-${item.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: (index % achievementsImages.length) * 0.02 }}
                className="relative group flex-shrink-0"
              >
                <div className="w-56 md:w-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100">
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x300?text=Achievement";
                      }}
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 shadow-md">
                      <span className="text-xs font-bold text-primary">{item.year}</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-primary/70" />
                      <h4 className="font-display font-semibold text-xs text-foreground line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          🏆 {achievementsImages.length}+ Achievements • 🖱️ Hover to pause
        </p>
      </div>
      {/* Yoga Journey Photos Auto-Scroll Section */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
            Our Yoga Journey
          </h3>
          <p className="text-sm text-muted-foreground">Experience the beauty of yoga through our practice</p>
        </motion.div>

        <div
          ref={yogaScrollRef}
          className="overflow-x-hidden cursor-grab active:cursor-grabbing relative"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => setIsYogaHovered(true)}
          onMouseLeave={() => setIsYogaHovered(false)}
        >
          <div className="flex gap-4 md:gap-6 pb-4">
            {duplicatedImages.map((image, index) => (
              <motion.div
                key={`yoga-${image.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % portraitImages.length) * 0.01 }}
                className="relative group flex-shrink-0"
              >
                <div className="w-64 md:w-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x600?text=Image+Not+Found";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-display text-sm font-semibold px-3 py-1 bg-black/50 rounded-full backdrop-blur-sm">
                      {image.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          🖱️ Hover to pause • Infinite smooth scrolling
        </p>
      </div>

      

      {/* Original Content */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 md:space-y-6"
        >
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Yoga is a 5,000-year-old practice originating from ancient India. The word "Yoga" comes from
            Sanskrit, meaning "to unite" — the union of mind, body, and spirit. It encompasses physical
            postures (asanas), breathing techniques (pranayama), and meditation (dhyana).
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            In our fast-paced modern world, yoga has become more relevant than ever. It offers a sanctuary
            of calm, a way to reconnect with ourselves, and a path to holistic health that no other practice
            can match.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Whether you're seeking stress relief, physical fitness, or spiritual awakening, yoga adapts to
            meet you where you are on your journey.
          </p>
        </motion.div>

        {/* Pillars Cards */}
        <div className="grid gap-4 md:gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg bg-background border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                <p.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-display text-base sm:text-lg font-semibold mb-1 text-foreground">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;