import { useState } from "react";
import { motion } from "framer-motion";
import { Check, FileText, Sparkles, Loader2, ChevronLeft, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ExtensionDemo = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [aiConnected, setAiConnected] = useState(false);
  const [docsLoaded, setDocsLoaded] = useState(false);

  const [formData, setFormData] = useState({
    position: "",
    startDate: "",
    responsibility: "",
    fitDescription: "",
  });

  const handleConnectAI = () => {
    setAiConnected(true);
    toast({
      title: "AI Provider Connected",
      description: "Groq AI is now ready to use",
    });
  };

  const handleUploadDocs = () => {
    setDocsLoaded(true);
    toast({
      title: "Documents Loaded",
      description: "Your resume and profile data are ready",
    });
  };

  const handleAnalyzeAndFill = async () => {
    if (!aiConnected || !docsLoaded) {
      toast({
        title: "Setup Required",
        description: "Please connect AI and load documents first",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setIsFilled(false);

    toast({
      title: "Analyzing form...",
      description: "AI is detecting form fields and generating responses",
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));

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
      className="flex rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-2xl"
    >
      {/* Job Application Form - White background like screenshot */}
      <div className="bg-white p-6 w-[380px]">
        <div className="mb-5">
          <h3 className="font-semibold text-base text-[#1e293b]">Online Job Application Form</h3>
          <p className="text-xs text-[#64748b] mt-1">Complete all required fields below</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-[#475569] mb-1.5 block">Applied Position *</label>
            <input
              type="text"
              value={formData.position}
              readOnly
              placeholder="Enter position"
              className="w-full px-3 py-2.5 text-sm rounded-lg bg-white border border-[#e2e8f0] text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0ea5e9]"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-[#475569] mb-1.5 block">Earliest Start Date *</label>
            <input
              type="text"
              value={formData.startDate}
              readOnly
              placeholder="YYYY-MM-DD"
              className="w-full px-3 py-2.5 text-sm rounded-lg bg-white border border-[#e2e8f0] text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0ea5e9]"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-[#475569] mb-1.5 block">Why do you want this responsibility? *</label>
            <textarea
              value={formData.responsibility}
              readOnly
              placeholder="Describe your motivation..."
              rows={3}
              className="w-full px-3 py-2.5 text-sm rounded-lg bg-white border border-[#e2e8f0] text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0ea5e9] resize-none"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-[#475569] mb-1.5 block">Why would this role fit you? (60 words) *</label>
            <textarea
              value={formData.fitDescription}
              readOnly
              placeholder="Describe in 60 words..."
              rows={3}
              className="w-full px-3 py-2.5 text-sm rounded-lg bg-white border border-[#e2e8f0] text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0ea5e9] resize-none"
            />
          </div>

          <Button 
            variant="outline" 
            size="default" 
            className="w-full text-sm border-[#e2e8f0] text-[#64748b] hover:bg-[#f8fafc] bg-white"
            disabled
          >
            Submit Application
          </Button>
        </div>
      </div>

      {/* Extension Sidebar Panel - Matching screenshot colors */}
      <div className="bg-[#f8fafc] p-5 w-[260px] border-l border-[#e2e8f0] flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <ChevronLeft className="w-4 h-4 text-[#64748b]" />
          <span className="font-semibold text-sm text-[#1e293b]">Ready to Fill</span>
        </div>

        {/* Step 1 & 2: Status Cards */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* AI Provider Card */}
          <button
            onClick={handleConnectAI}
            className={`rounded-xl p-4 flex flex-col items-center border transition-all ${
              aiConnected 
                ? "bg-[#f0fdf4] border-[#bbf7d0]" 
                : "bg-white border-[#e2e8f0] hover:border-[#0ea5e9] cursor-pointer"
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
              aiConnected ? "bg-[#dcfce7]" : "bg-[#f1f5f9]"
            }`}>
              <Check className={`w-4 h-4 ${aiConnected ? "text-[#22c55e]" : "text-[#94a3b8]"}`} />
            </div>
            <span className={`text-[11px] text-center font-medium ${
              aiConnected ? "text-[#15803d]" : "text-[#64748b]"
            }`}>
              AI Provider
              <br />
              {aiConnected ? "Connected" : "Click to Connect"}
            </span>
          </button>

          {/* Documents Card */}
          <button
            onClick={handleUploadDocs}
            className={`rounded-xl p-4 flex flex-col items-center border transition-all ${
              docsLoaded 
                ? "bg-[#f0fdf4] border-[#bbf7d0]" 
                : "bg-white border-[#e2e8f0] hover:border-[#0ea5e9] cursor-pointer"
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
              docsLoaded ? "bg-[#dcfce7]" : "bg-[#f1f5f9]"
            }`}>
              <FileText className={`w-4 h-4 ${docsLoaded ? "text-[#22c55e]" : "text-[#94a3b8]"}`} />
            </div>
            <span className={`text-[11px] text-center font-medium ${
              docsLoaded ? "text-[#15803d]" : "text-[#64748b]"
            }`}>
              Documents
              <br />
              {docsLoaded ? "Loaded" : "Click to Upload"}
            </span>
          </button>
        </div>

        {/* Form Context Input */}
        <div className="mb-4">
          <label className="text-xs font-medium text-[#475569] mb-1.5 block">Form-Specific Context (Optional)</label>
          <p className="text-[10px] text-[#94a3b8] mb-2">Add URLs with additional context for this form</p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="https://company.com/job-post"
              className="flex-1 px-3 py-2 text-xs rounded-lg bg-white border border-[#e2e8f0] text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0ea5e9]"
            />
            <button className="px-3 py-2 text-xs rounded-lg bg-white border border-[#e2e8f0] text-[#0ea5e9] font-medium hover:bg-[#f0f9ff]">
              + Add
            </button>
          </div>
        </div>

        {/* How to use */}
        <div className="mb-4 text-[10px] text-[#64748b]">
          <p className="font-medium text-[#475569] mb-1">How to use:</p>
          <ul className="space-y-0.5 list-disc list-inside">
            <li>Connect AI provider above</li>
            <li>Upload your documents</li>
            <li>Click button to detect and fill</li>
          </ul>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Step 3: Analyze Button - Teal/Cyan like screenshot */}
        <Button
          onClick={handleAnalyzeAndFill}
          disabled={isAnalyzing}
          className="w-full text-sm gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white py-5 shadow-lg"
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
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-[#22c55e] text-center mt-3 font-medium"
          >
            ✓ Form filled successfully
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default ExtensionDemo;
