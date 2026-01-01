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

  const handleReset = () => {
    setFormData({
      position: "",
      startDate: "",
      responsibility: "",
      fitDescription: "",
    });
    setIsFilled(false);
    toast({
      title: "Form reset",
      description: "All fields have been cleared",
    });
  };

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
      className="flex rounded-2xl overflow-hidden border border-slate-200 shadow-2xl"
    >
      {/* Job Application Form */}
      <div className="bg-white p-8 w-[650px]">
        <div className="mb-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-xl text-slate-800">Online Job Application Form</h3>
              <p className="text-sm text-slate-500 mt-1">Complete all required fields below</p>
            </div>
            <button
              onClick={handleReset}
              className="text-sm text-pink-600 hover:text-pink-700 font-medium underline"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {/* Position Field */}
          <div className="relative">
            <label className="text-sm font-medium text-slate-600 mb-2 block">Applied Position *</label>
            <div className="relative">
              <input
                type="text"
                value={formData.position}
                readOnly
                placeholder="Enter position"
                className={`w-full px-4 py-3.5 text-base rounded-lg border text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all duration-300 ${
                  formData.position ? "bg-emerald-50 border-emerald-400" : "bg-slate-50 border-slate-200"
                }`}
              />
              {formData.position && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Check className="w-5 h-5 text-emerald-500" />
                </div>
              )}
            </div>
          </div>

          {/* Start Date Field */}
          <div className="relative">
            <label className="text-sm font-medium text-slate-600 mb-2 block">Earliest Start Date *</label>
            <div className="relative">
              <input
                type="text"
                value={formData.startDate}
                readOnly
                placeholder="YYYY-MM-DD"
                className={`w-full px-4 py-3.5 text-base rounded-lg border text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all duration-300 ${
                  formData.startDate ? "bg-emerald-50 border-emerald-400" : "bg-slate-50 border-slate-200"
                }`}
              />
              {formData.startDate && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Check className="w-5 h-5 text-emerald-500" />
                </div>
              )}
            </div>
          </div>

          {/* Responsibility Field */}
          <div className="relative">
            <label className="text-sm font-medium text-slate-600 mb-2 block">Why do you want this responsibility? *</label>
            <div className="relative">
              <textarea
                value={formData.responsibility}
                readOnly
                placeholder="Describe your motivation..."
                rows={3}
                className={`w-full px-4 py-3.5 text-base rounded-lg border text-slate-800 placeholder:text-slate-400 focus:outline-none resize-none transition-all duration-300 ${
                  formData.responsibility ? "bg-emerald-50 border-emerald-400" : "bg-slate-50 border-slate-200"
                }`}
              />
              {formData.responsibility && (
                <div className="absolute right-3 top-3">
                  <Check className="w-5 h-5 text-emerald-500" />
                </div>
              )}
            </div>
          </div>

          {/* Fit Description Field */}
          <div className="relative">
            <label className="text-sm font-medium text-slate-600 mb-2 block">Why would this role fit you? (60 words) *</label>
            <div className="relative">
              <textarea
                value={formData.fitDescription}
                readOnly
                placeholder="Describe in 60 words..."
                rows={3}
                className={`w-full px-4 py-3.5 text-base rounded-lg border text-slate-800 placeholder:text-slate-400 focus:outline-none resize-none transition-all duration-300 ${
                  formData.fitDescription ? "bg-emerald-50 border-emerald-400" : "bg-slate-50 border-slate-200"
                }`}
              />
              {formData.fitDescription && (
                <div className="absolute right-3 top-3">
                  <Check className="w-5 h-5 text-emerald-500" />
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            variant="outline"
            size="lg"
            className="w-full text-base border-slate-200 text-slate-600 hover:bg-slate-50 py-6"
            disabled
          >
            Submit Application
          </Button>
        </div>
      </div>

      {/* Extension Sidebar Panel */}
      <div className="bg-slate-50 p-6 w-[380px] border-l border-slate-200 flex flex-col">
        <div className="mb-5">
          <h2 className="font-bold text-lg bg-gradient-to-r from-pink-600 to-blue-500 bg-clip-text text-transparent">
            Prefiller
          </h2>
        </div>

        {/* Status Indicators */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex flex-col items-center">
            <Check className="w-6 h-6 text-emerald-500 mb-1" />
            <span className="text-xs text-emerald-700 text-center font-medium">AI Connected</span>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex flex-col items-center">
            <FileText className="w-6 h-6 text-emerald-500 mb-1" />
            <span className="text-xs text-emerald-700 text-center font-medium">Docs Loaded</span>
          </div>
        </div>

        {/* Spacer to push button to bottom */}
        <div className="flex-1" />

        {/* Analyze Button - At Bottom */}
        <Button
          onClick={handleAnalyzeAndFill}
          disabled={isAnalyzing}
          className="w-full text-base gap-3 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white py-6"
          size="lg"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Analyze & Fill Forms
            </>
          )}
        </Button>

        {isFilled && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-emerald-600 text-center mt-4 font-medium"
          >
            ✓ Form filled successfully
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default ExtensionDemo;
