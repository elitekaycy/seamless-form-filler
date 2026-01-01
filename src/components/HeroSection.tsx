import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Chrome, Sparkles, Github } from "lucide-react";
import InteractiveFormCard from "./InteractiveFormCard";
import ExtensionImageCard from "./ExtensionImageCard";

const HeroSection = () => {
  return (
    <section className="relative h-full flex items-center px-6 lg:px-12 pt-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Smart form filling powered by AI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Fill forms{" "}
            <span className="text-gradient">instantly</span>{" "}
            with a single click
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Prefiller learns from your input to provide accurate and fast form filling. 
              Save valuable time and reduce repetitive typing on signups, checkouts, and applications.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Created by</span>
              <a 
                href="https://github.com/elitekaycy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
              >
                <Github className="w-4 h-4" />
                elitekaycy
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button variant="hero" size="lg" className="gap-2">
              <Chrome className="w-5 h-5" />
              Add To Chrome
            </Button>
            <span className="text-sm text-muted-foreground">It's free to use!</span>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-6 pt-4"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium text-foreground/70"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">10k+ users</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-primary fill-primary" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-muted-foreground ml-1">4.9/5</span>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Cards */}
        <div className="relative h-[600px] hidden lg:block">
          {/* Interactive Form Card - Main */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <InteractiveFormCard />
          </div>

          {/* Extension Image Card 1 - Top Right */}
          <div className="absolute -top-8 -right-16 z-10">
            <ExtensionImageCard 
              alt="Prefiller extension popup" 
              delay={0.6} 
              className="w-80 h-52 shadow-xl"
            />
          </div>

          {/* Extension Image Card 2 - Bottom Left */}
          <div className="absolute -bottom-8 -left-16 z-10">
            <ExtensionImageCard 
              alt="Prefiller in action" 
              delay={0.8} 
              className="w-80 h-52 shadow-xl"
            />
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute top-4 left-20 w-20 h-20 rounded-full bg-primary/10 blur-2xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl"
          />
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      </div>
    </section>
  );
};

export default HeroSection;