import { motion } from "framer-motion";
import { Calendar, Award, Quote } from "lucide-react";

const FounderCard = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container px-4 mx-auto max-w-4xl">
        {/* Centered Card - Smaller */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-500"
        >
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Founder Photo (Smaller) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="md:w-2/5 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5"
            >
              <div className="relative h-full min-h-[280px] md:min-h-[320px] flex items-center justify-center p-4 md:p-5">
                <div className="relative w-full max-w-[200px] md:max-w-[220px] mx-auto">
                  {/* Decorative ring */}
                  <div className="absolute -inset-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 blur-md" />
                  
                  {/* Image Container */}
                  <div className="relative rounded-lg overflow-hidden shadow-md aspect-square">
                    <img
                      src="/photo/self.png"
                      alt="Nevin Salim Lalani - Founder of Spirit Song Yoga"
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop";
                      }}
                    />
                    {/* Overlay subtle gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                  
                  {/* Experience Badge - Smaller */}
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full shadow-md px-2.5 py-1 flex items-center gap-1.5">
                    <Award className="w-3 h-3 text-primary" />
                    <span className="text-[10px] font-semibold text-gray-700">20+ Years</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Text Content (Condensed) */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="md:w-3/5 p-5 md:p-6"
            >
              {/* Name - Smaller Heading */}
              <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Nevin Salim Lalani
              </h2>
              
              {/* Designation - Smaller Badge */}
              <div className="mt-1.5 mb-3">
                <span className="inline-block text-primary font-semibold text-sm bg-primary/10 px-3 py-0.5 rounded-full">
                  Founder & Director of SPIRIT SONG YOGA
                </span>
              </div>
              
              {/* Experience with Icon - Compact */}
              <div className="flex items-center gap-1.5 text-gray-600 mb-3">
                <Calendar className="w-3.5 h-3.5 text-primary/70" />
                <span className="text-xs font-medium">20+ Years of Experience</span>
              </div>
              
              {/* Tagline - Smaller Italic */}
              <div className="relative mb-4">
                <Quote className="absolute -top-1.5 -left-0.5 w-4 h-4 text-primary/20" />
                <p className="text-gray-500 italic pl-5 text-sm font-light">
                  "Unplug from chaos. Connect to yourself"
                </p>
              </div>
              
              {/* Description - Compact */}
              <div className="space-y-2 text-gray-600">
                <p className="text-xs md:text-sm leading-relaxed">
                  With over two decades of experience in yoga and wellness, Nevin Salim Lalani has dedicated his life to spreading the true essence of yoga. His approach blends traditional practices with modern understanding, helping individuals achieve balance in mind, body, and spirit.
                </p>
                <p className="text-xs md:text-sm leading-relaxed">
                  Through <span className="font-semibold text-primary">SPIRIT SONG YOGA</span>, he aims to inspire a healthier and more mindful lifestyle.
                </p>
              </div>
              
              {/* Signature Line - Smaller */}
              <div className="mt-5 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-[1.5px] bg-primary/40 rounded-full" />
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Yoga Master & Wellness Guide</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderCard;