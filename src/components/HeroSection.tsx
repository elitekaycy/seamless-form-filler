import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Chrome, Sparkles, Github } from "lucide-react";
import { Link } from "react-router-dom";
import ExtensionDemo from "./ExtensionDemo";

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

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col gap-3 pt-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="https://github.com/elitekaycy/prefiller"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
              <div className="h-4 w-px bg-border" />
              <span>MIT License</span>
              <div className="h-4 w-px bg-border" />
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <div className="h-4 w-px bg-border" />
              <Link to="/terms-of-service" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
            <div>
              <p>© {new Date().getFullYear()} Prefiller. All rights reserved.</p>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Extension Demo */}
        <div className="hidden lg:flex items-center justify-center">
          <ExtensionDemo />
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