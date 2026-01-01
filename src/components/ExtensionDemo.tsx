import { useState } from "react";
import { motion } from "framer-motion";
import { Check, FileText, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ExtensionDemo = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [formData, setFormData] = useState({
    position: "",
    startDate: "",
    responsibility: "",
    fitDescription: "",
  });

  const handleAnalyzeAndFill = async () => {
    setIsAnalyzing(true);
    setIsFilled(false);

    toast({
      title: "Analyzing form...",
      description: "AI is detecting form fields and generating responses",
    });

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Fill fields sequentially
    const filledData = {
      position: "Software Engineer",
      startDate: "2026-02-01",
      responsibility: "I want to contribute to building scalable systems and mentor junior developers while growing my technical leadership skills.",
      fitDescription: "With 5+ years in full-stack development and expertise in React and Node.js, I bring strong problem-solving skills and a passion for clean, maintainable code.",
    };

    setFormData({ position: filledData.position, startDate: "", responsibility: "", fitDescription: "" });
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    setFormData({ position: filledData.position, startDate: filledData.startDate, responsibility: "", fitDescription: "" });
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    setFormData({ position: filledData.position, startDate: filledData.startDate, responsibility: filledData.responsibility, fitDescription: "" });
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    setFormData(filledData);

    setIsAnalyzing(false);
    setIsFilled(true);

    toast({
      title: "Form filled successfully!",
      description: "All fields have been populated with AI-generated content",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className="flex rounded-2xl overflow-hidden border border-border/50 shadow-2xl"
    >
      {/* Job Application Form */}
      <div className="bg-background/95 backdrop-blur-sm p-5 w-[320px]">
        <div className="mb-4">
          <h3 className="font-semibold text-sm text-foreground">Job Application Form</h3>
          <p className="text-xs text-muted-foreground">Complete all required fields</p>
        </div>

        <div className="space-y-3">
          {/* Position Field */}
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Applied Position *</label>
            <input
              type="text"
              value={formData.position}
              readOnly
              placeholder="Enter position"
              className="w-full px-3 py-2 text-xs rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
            />
          </div>

          {/* Start Date Field */}
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Earliest Start Date *</label>
            <input
              type="text"
              value={formData.startDate}
              readOnly
              placeholder="YYYY-MM-DD"
              className="w-full px-3 py-2 text-xs rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
            />
          </div>

          {/* Responsibility Field */}
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Why do you want this responsibility? *</label>
            <textarea
              value={formData.responsibility}
              readOnly
              placeholder="Describe your motivation..."
              rows={2}
              className="w-full px-3 py-2 text-xs rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none resize-none"
            />
          </div>

          {/* Fit Description Field */}
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Why would this role fit you? (60 words) *</label>
            <textarea
              value={formData.fitDescription}
              readOnly
              placeholder="Describe in 60 words..."
              rows={2}
              className="w-full px-3 py-2 text-xs rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-xs"
            disabled
          >
            Submit Application
          </Button>
        </div>
      </div>

      {/* Extension Sidebar Panel */}
      <div className="bg-card/95 backdrop-blur-sm p-4 w-[200px] border-l border-border/50">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-primary" />
          </div>
          <span className="font-semibold text-sm text-foreground">Prefiller</span>
        </div>

        {/* Status Indicators */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-accent/20 rounded-lg p-2 flex flex-col items-center">
            <Check className="w-4 h-4 text-accent mb-1" />
            <span className="text-[10px] text-muted-foreground text-center">AI Connected</span>
          </div>
          <div className="bg-accent/20 rounded-lg p-2 flex flex-col items-center">
            <FileText className="w-4 h-4 text-accent mb-1" />
            <span className="text-[10px] text-muted-foreground text-center">Docs Loaded</span>
          </div>
        </div>

        {/* Context Input */}
        <div className="mb-4">
          <label className="text-[10px] text-muted-foreground mb-1 block">Form Context (Optional)</label>
          <input
            type="text"
            placeholder="e.g., job posting URL"
            className="w-full px-2 py-1.5 text-[10px] rounded bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
          />
        </div>

        {/* Analyze Button */}
        <Button
          onClick={handleAnalyzeAndFill}
          disabled={isAnalyzing}
          className="w-full text-xs gap-1.5 bg-accent hover:bg-accent/90 text-accent-foreground"
          size="sm"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="w-3 h-3 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="w-3 h-3" />
              Analyze & Fill
            </>
          )}
        </Button>

        {isFilled && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] text-accent text-center mt-2"
          >
            ✓ Form filled successfully
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default ExtensionDemo;
