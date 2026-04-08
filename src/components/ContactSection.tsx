import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Youtube, Facebook } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon. 🙏");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact" title="Get in Touch" subtitle="We'd love to hear from you" alternate>
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <Input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <Textarea
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <Button variant="hero" type="submit" className="w-full">
            Send Message
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h3 className="font-display text-xl font-semibold mb-4 text-foreground">Spirit Song Yoga</h3>
          <p className="text-muted-foreground mb-6">
            Join our community and embark on a transformative journey toward balance, peace, and well-being.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm">hello@spiritsongyoga.com</span>
          </div>
          <div className="flex gap-3 mt-4">
            {[Instagram, Youtube, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-secondary-foreground"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
