import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Sparkles } from "lucide-react";

const InteractiveFormCard = ({ className = "" }: { className?: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    responsibilities: "",
    fitDescription: "",
  });

  const dummyData = {
    name: "John Anderson",
    email: "john.anderson@email.com",
    responsibilities: "I am passionate about driving impactful projects and collaborating with cross-functional teams to deliver exceptional results.",
    fitDescription: "With 5+ years in product development, I bring strong analytical skills and a user-centered approach. My experience leading agile teams aligns perfectly with this role's demands.",
  };

  const handleFillForm = async () => {
    setIsLoading(true);
    
    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Fill fields one by one with slight delays
    setFormData({ ...formData, name: dummyData.name });
    await new Promise((resolve) => setTimeout(resolve, 200));
    
    setFormData((prev) => ({ ...prev, email: dummyData.email }));
    await new Promise((resolve) => setTimeout(resolve, 200));
    
    setFormData((prev) => ({ ...prev, responsibilities: dummyData.responsibilities }));
    await new Promise((resolve) => setTimeout(resolve, 200));
    
    setFormData((prev) => ({ ...prev, fitDescription: dummyData.fitDescription }));
    
    setIsLoading(false);
    setIsFilled(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      responsibilities: "",
      fitDescription: "",
    });
    setIsFilled(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className={`card-glass rounded-xl border border-border/50 p-5 w-80 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-foreground">Job Application</span>
        {isFilled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={handleReset}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Reset
          </motion.button>
        )}
      </div>

      {/* Form Fields */}
      <div className="space-y-3">
        {/* Name Field */}
        <div className="space-y-1">
          <label className="text-[10px] text-muted-foreground uppercase tracking-wider">
            Full Name
          </label>
          <input
            type="text"
            value={formData.name}
            readOnly
            placeholder="Enter your name..."
            className={`w-full px-3 py-2 rounded-md text-xs bg-secondary/50 border transition-all duration-300 ${
              formData.name
                ? "border-primary/50 bg-primary/10 text-foreground"
                : "border-border text-muted-foreground"
            }`}
          />
        </div>

        {/* Email Field */}
        <div className="space-y-1">
          <label className="text-[10px] text-muted-foreground uppercase tracking-wider">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            readOnly
            placeholder="Enter your email..."
            className={`w-full px-3 py-2 rounded-md text-xs bg-secondary/50 border transition-all duration-300 ${
              formData.email
                ? "border-primary/50 bg-primary/10 text-foreground"
                : "border-border text-muted-foreground"
            }`}
          />
        </div>

        {/* Responsibilities Field */}
        <div className="space-y-1">
          <label className="text-[10px] text-muted-foreground uppercase tracking-wider">
            Why do you want this responsibilities?
          </label>
          <textarea
            value={formData.responsibilities}
            readOnly
            placeholder="Describe your motivation..."
            rows={2}
            className={`w-full px-3 py-2 rounded-md text-xs bg-secondary/50 border transition-all duration-300 resize-none ${
              formData.responsibilities
                ? "border-primary/50 bg-primary/10 text-foreground"
                : "border-border text-muted-foreground"
            }`}
          />
        </div>

        {/* Fit Description Field */}
        <div className="space-y-1">
          <label className="text-[10px] text-muted-foreground uppercase tracking-wider">
            Describe in 60 words why this role would fit you
          </label>
          <textarea
            value={formData.fitDescription}
            readOnly
            placeholder="Why are you a good fit..."
            rows={3}
            className={`w-full px-3 py-2 rounded-md text-xs bg-secondary/50 border transition-all duration-300 resize-none ${
              formData.fitDescription
                ? "border-primary/50 bg-primary/10 text-foreground"
                : "border-border text-muted-foreground"
            }`}
          />
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={handleFillForm}
        disabled={isLoading || isFilled}
        className={`w-full mt-4 py-2.5 text-xs font-medium rounded-md flex items-center justify-center gap-2 transition-all duration-300 ${
          isFilled
            ? "bg-primary/20 text-primary cursor-default"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-3 h-3 animate-spin" />
            Analyzing...
          </>
        ) : isFilled ? (
          <>
            <Sparkles className="w-3 h-3" />
            Form Filled!
          </>
        ) : (
          <>
            <Sparkles className="w-3 h-3" />
            Analyze and Fill Form
          </>
        )}
      </button>
    </motion.div>
  );
};

export default InteractiveFormCard;