import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;

    try {
      // 1️⃣ Send notification to you
      await emailjs.sendForm(
        "service_szgvrkl",      // Your EmailJS Service ID
        "template_juhtew1",     // Contact Us template (you receive the message)
        form,
        "xg5ZZkfG8r3VQTmU9"     // Your Public Key
      );
      console.log("Notification sent to you ✅");

      // 2️⃣ Send auto-reply to visitor
      await emailjs.sendForm(
        "service_szgvrkl",
        "template_5k7541g",     // Auto-Reply template (sent to visitor)
        form,
        "xg5ZZkfG8r3VQTmU9"
      );
      console.log("Auto-reply sent to visitor ✅");

      toast({
        title: "Message sent!",
        description: "Your message has been delivered. Thank you for reaching out!",
      });

      form.reset();
    } catch (error: any) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description:
          error.text || "Something went wrong. Please check your keys or network.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to discuss opportunities? Let's connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Let's Build Something Impactful
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm open to remote opportunities, contract work, and full-time positions. Whether it’s
                data science, AI/ML projects, or software development, I’d love to collaborate and
                bring ideas to life.
              </p>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Opportunities
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href="mailto:smutua7504@gmail.com"
                className="flex items-center gap-4 p-4 glass-card hover:border-primary/30 transition-all group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">smutua7504@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass-card">
                <div className="p-2 rounded-lg bg-secondary text-muted-foreground">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Nairobi, Kenya (Remote-friendly)</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/muthui7504"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass-card hover:border-primary/30 transition-all text-muted-foreground hover:text-foreground"
              >
                <Github size={18} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/simon-muthui-2308bb260/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass-card hover:border-primary/30 transition-all text-muted-foreground hover:text-foreground"
              >
                <Linkedin size={18} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input name="name" required placeholder="Your name" />
                <Input name="email" type="email" required placeholder="your@email.com" />
              </div>

              <Input name="subject" required placeholder="What's this about?" />

              <Textarea
                name="message"
                required
                placeholder="Tell me about your project or opportunity..."
                rows={5}
              />

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Sending..." : <>Send Message <Send size={16} className="ml-2" /></>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
