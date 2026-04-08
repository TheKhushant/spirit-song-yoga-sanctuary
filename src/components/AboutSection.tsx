import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Brain, Dumbbell, Sparkles } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

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

// Duplicate images for seamless infinite scroll (3 times for smoother loop)
const duplicatedImages = [...portraitImages, ...portraitImages, ...portraitImages];

const AboutSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const [isHovered, setIsHovered] = useState(false);
  const scrollSpeed = 0.5; // pixels per frame (adjust for speed)
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = scrollContainer.scrollLeft;
    let lastTimestamp = 0;
    
    const animateScroll = (timestamp: number) => {
      if (!scrollContainer) return;
      
      // Calculate time delta for smooth animation
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
        animationRef.current = requestAnimationFrame(animateScroll);
        return;
      }
      
      const delta = Math.min(timestamp - lastTimestamp, 100) / 16.67; // Normalize to 60fps
      lastTimestamp = timestamp;
      
      if (!isHovered) {
        // Increment scroll position based on time delta
        scrollPosition += scrollSpeed * delta;
        
        // Get the actual scroll width of the container
        const maxScroll = scrollContainer.scrollWidth / 3; // One-third of total (original set)
        
        // Reset scroll position when we've scrolled past one set
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
          // Silently reset without visible jump
          scrollContainer.scrollLeft = 0;
        } else {
          // Apply smooth scroll
          scrollContainer.scrollLeft = scrollPosition;
        }
      } else {
        // Update scrollPosition from actual scroll position when paused
        scrollPosition = scrollContainer.scrollLeft;
      }
      
      // Continue animation loop
      animationRef.current = requestAnimationFrame(animateScroll);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animateScroll);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, scrollSpeed]);

  return (
    <SectionWrapper id="about" title="The Art of Yoga" subtitle="An ancient practice for the modern world" alternate>
      {/* Portrait Photos Auto-Scroll Section */}
      <div className="mb-12">
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

        {/* Infinite Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-hidden cursor-grab active:cursor-grabbing relative"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-4 md:gap-6 pb-4">
            {duplicatedImages.map((image, index) => (
              <motion.div
                key={`${image.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % portraitImages.length) * 0.01 }}
                className="relative group flex-shrink-0"
              >
                <div className="w-64 md:w-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Portrait Image */}
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback for broken images
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x600?text=Image+Not+Found";
                    }}
                  />
                  {/* Overlay with name */}
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

        {/* Custom Scrollbar */}
        <div className="flex justify-center gap-1 mt-6">
          {portraitImages.slice(0, 8).map((_, idx) => (
            <div
              key={idx}
              className="h-1 rounded-full transition-all duration-300 bg-primary/20"
              style={{ width: `${100 / 8}%`, maxWidth: "40px" }}
            />
          ))}
        </div>

        {/* Instruction text */}
        <p className="text-center text-xs text-muted-foreground mt-4">
          🖱️ Hover to pause • Infinite smooth scrolling
        </p>
      </div>

      {/* Original Content */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Content - Responsive typography and spacing */}
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

        {/* Pillars Cards - Responsive layout */}
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
              {/* Icon - Responsive sizing */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                <p.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              
              {/* Text Content */}
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