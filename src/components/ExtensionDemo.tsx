import { useState } from "react";
import { motion } from "framer-motion";
import { Check, FileText, Sparkles, Loader2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import logo from "@/assets/logo.svg";

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

  const handleReset = () => {
    setFormData({
      position: "",
      startDate: "",
      responsibility: "",
      fitDescription: "",
    });
    setIsFilled(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className="flex rounded-l-2xl overflow-hidden border border-slate-200 border-r-0 shadow-2xl"
    >
      {/* Job Application Form */}
      <div className="bg-white p-8 w-[420px]">
        <div className="mb-6">
          <h3 className="font-semibold text-lg text-slate-800">Online Job Application Form</h3>
          <p className="text-sm text-slate-500 mt-1">Complete all required fields below</p>
        </div>

        <div className="space-y-4">
          {/* Position Field */}
          <div className="relative">
            <label className="text-xs font-medium text-slate-600 mb-1.5 block">Applied Position *</label>
            <div className="relative">
              <input
                type="text"
                value={formData.position}
                readOnly
                placeholder="Enter position"
                className={`w-full px-3 py-2.5 text-sm rounded-lg border text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all duration-300 ${
                  formData.position ? "bg-emerald-50 border-emerald-400" : "bg-slate-50 border-slate-200"
                }`}
              />
              {formData.position && (
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
              )}
            </div>
          </div>

          {/* Start Date Field */}
          <div className="relative">
            <label className="text-xs font-medium text-slate-600 mb-1.5 block">Earliest Start Date *</label>
            <div className="relative">
              <input
                type="text"
                value={formData.startDate}
                readOnly
                placeholder="YYYY-MM-DD"
                className={`w-full px-3 py-2.5 text-sm rounded-lg border text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all duration-300 ${
                  formData.startDate ? "bg-emerald-50 border-emerald-400" : "bg-slate-50 border-slate-200"
                }`}
              />
              {formData.startDate && (
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
              )}
            </div>
          </div>

          {/* Responsibility Field */}
          <div className="relative">
            <label className="text-xs font-medium text-slate-600 mb-1.5 block">Why do you want this responsibility? *</label>
            <div className="relative">
              <textarea
                value={formData.responsibility}
                readOnly
                placeholder="Describe your motivation..."
                rows={3}
                className={`w-full px-3 py-2.5 text-sm rounded-lg border text-slate-800 placeholder:text-slate-400 focus:outline-none resize-none transition-all duration-300 ${
                  formData.responsibility ? "bg-emerald-50 border-emerald-400" : "bg-slate-50 border-slate-200"
                }`}
              />
              {formData.responsibility && (
                <div className="absolute right-2 top-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
              )}
            </div>
          </div>

          {/* Fit Description Field */}
          <div className="relative">
            <label className="text-xs font-medium text-slate-600 mb-1.5 block">Why would this role fit you? (60 words) *</label>
            <div className="relative">
              <textarea
                value={formData.fitDescription}
                readOnly
                placeholder="Describe in 60 words..."
                rows={3}
                className={`w-full px-3 py-2.5 text-sm rounded-lg border text-slate-800 placeholder:text-slate-400 focus:outline-none resize-none transition-all duration-300 ${
                  formData.fitDescription ? "bg-emerald-50 border-emerald-400" : "bg-slate-50 border-slate-200"
                }`}
              />
              {formData.fitDescription && (
                <div className="absolute right-2 top-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            variant="outline" 
            size="default" 
            className="w-full text-sm border-slate-200 text-slate-600 hover:bg-slate-50"
            disabled
          >
            Submit Application
          </Button>
        </div>
      </div>

      {/* Extension Sidebar Panel */}
      <div className="bg-slate-50 p-6 w-[280px] border-l border-slate-200 flex flex-col">
        <div className="flex items-center gap-2 mb-5">
          <img src={logo} alt="Prefiller" className="w-7 h-7" />
          <span className="font-semibold text-sm text-slate-800">Prefiller</span>
        </div>

        {/* Status Indicators */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex flex-col items-center">
            <Check className="w-5 h-5 text-emerald-500 mb-1" />
            <span className="text-[11px] text-emerald-700 text-center font-medium">AI Connected</span>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex flex-col items-center">
            <FileText className="w-5 h-5 text-emerald-500 mb-1" />
            <span className="text-[11px] text-emerald-700 text-center font-medium">Docs Loaded</span>
          </div>
        </div>

        {/* Context Input */}
        <div className="mb-5">
          <label className="text-xs font-medium text-slate-600 mb-1.5 block">Form Context (Optional)</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="https://company.com/job"
              className="flex-1 px-3 py-2 text-xs rounded-lg bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-400"
            />
            <button className="px-3 py-2 text-xs rounded-lg bg-white border border-slate-200 text-blue-500 font-medium hover:bg-blue-50">
              + Add
            </button>
          </div>
        </div>

        {/* Spacer to push button to bottom */}
        <div className="flex-1" />

        {/* Analyze Button - At Bottom */}
        <Button
          onClick={handleAnalyzeAndFill}
          disabled={isAnalyzing}
          className="w-full text-sm gap-2 bg-blue-500 hover:bg-blue-600 text-white py-5"
          size="lg"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Analyze & Fill Forms
            </>
          )}
        </Button>

        {isFilled && (
          <Button
            onClick={handleReset}
            variant="outline"
            className="w-full text-sm gap-2 mt-3 border-slate-300 text-slate-600 hover:bg-slate-100"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Form
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default ExtensionDemo;
