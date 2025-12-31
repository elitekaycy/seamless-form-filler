import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

interface FormMockupProps {
  variant: "signup" | "checkout" | "application";
  className?: string;
  delay?: number;
}

const FormMockup = ({ variant, className = "", delay = 0 }: FormMockupProps) => {
  const forms = {
    signup: {
      title: "Create Account",
      fields: [
        { label: "Full Name", value: "John Anderson", filled: true },
        { label: "Email", value: "john@example.com", filled: true },
        { label: "Password", value: "••••••••••", filled: true },
      ],
    },
    checkout: {
      title: "Shipping Info",
      fields: [
        { label: "Address", value: "123 Main Street", filled: true },
        { label: "City", value: "San Francisco", filled: true },
        { label: "Zip Code", value: "94102", filled: true },
      ],
    },
    application: {
      title: "Job Application",
      fields: [
        { label: "Phone", value: "+1 (555) 123-4567", filled: true },
        { label: "LinkedIn", value: "linkedin.com/in/john", filled: true },
        { label: "Experience", value: "5+ years", filled: false },
      ],
    },
  };

  const form = forms[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`card-glass rounded-xl border border-border/50 p-4 w-64 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center">
            <Zap className="w-3 h-3 text-primary" />
          </div>
          <span className="text-xs font-medium text-foreground/80">{form.title}</span>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/20">
          <Check className="w-3 h-3 text-primary" />
          <span className="text-[10px] text-primary font-medium">Prefilled</span>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-3">
        {form.fields.map((field, index) => (
          <motion.div
            key={field.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: delay + 0.2 + index * 0.1 }}
            className="space-y-1"
          >
            <label className="text-[10px] text-muted-foreground uppercase tracking-wider">
              {field.label}
            </label>
            <div className={`px-3 py-2 rounded-md text-xs ${
              field.filled 
                ? "bg-primary/10 border border-primary/30 text-foreground" 
                : "bg-secondary/50 border border-border text-muted-foreground"
            }`}>
              {field.value}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Submit Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.6 }}
        className="w-full mt-4 py-2 bg-primary text-primary-foreground text-xs font-medium rounded-md"
      >
        Continue
      </motion.button>
    </motion.div>
  );
};

export default FormMockup;