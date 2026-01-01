import { Link } from "react-router-dom";
import Header from "@/components/Header";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 pt-24">
        <h1 className="text-4xl font-bold mb-4">Terms of Service for Prefiller</h1>
        <p className="text-muted-foreground mb-8">
          <strong>Last Updated:</strong> December 31, 2025<br />
          <strong>Effective Date:</strong> December 31, 2025
        </p>

        <section className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By installing, accessing, or using the Prefiller Chrome Extension ("the Extension", "Prefiller", "we", "our"), you ("User", "you", "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not install or use the Extension.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
          <p className="mb-4">
            Prefiller is a browser extension that uses AI technology to automatically fill web forms based on information extracted from documents you upload.
          </p>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
            <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
            <ul className="space-y-1 list-disc pl-5">
              <li>AI-powered form field detection and filling</li>
              <li>Support for multiple AI providers (Groq, Gemini, Claude, Chrome AI)</li>
              <li>Local document parsing (PDF, TXT, DOC, DOCX)</li>
              <li>Encrypted API key storage</li>
              <li>WCAG 2.1 AA accessibility compliance</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">What Prefiller Does:</h3>
          <ol className="list-decimal pl-5 space-y-1 mb-4">
            <li>Parses documents you upload to extract information</li>
            <li>Detects form fields on web pages</li>
            <li>Sends form context to your selected AI provider</li>
            <li>Receives suggestions from AI provider</li>
            <li>Fills forms with suggested values</li>
          </ol>

          <h3 className="text-xl font-semibold mt-6 mb-3">What Prefiller Does NOT Do:</h3>
          <ul className="space-y-1 mb-6 list-disc pl-6">
            <li>Automatically submit forms (you must click submit)</li>
            <li>Store form data permanently</li>
            <li>Upload your data to our servers (we don't have servers)</li>
            <li>Guarantee 100% accuracy in form filling</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Requirements</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Eligibility</h3>
          <ul className="space-y-1 mb-4">
            <li>You must be at least 13 years old to use this Extension</li>
            <li>If you are under 18, you must have parental or guardian consent</li>
            <li>You must have the legal capacity to enter into binding contracts</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Technical Requirements</h3>
          <ul className="space-y-1 mb-4">
            <li>Google Chrome browser (version 88 or higher recommended)</li>
            <li>For Chrome AI: Chrome 127+ with experimental AI features enabled</li>
            <li>Internet connection (for cloud-based AI providers)</li>
            <li>Valid API keys for cloud AI providers (Groq, Gemini, Claude)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">3.3 User Responsibilities</h3>
          <p className="mb-2">You are responsible for:</p>
          <ul className="space-y-1 mb-6">
            <li>Obtaining and protecting your own AI provider API keys</li>
            <li>Reviewing AI-generated form fills before submission</li>
            <li>Ensuring uploaded documents don't contain malware</li>
            <li>Complying with websites' terms of service</li>
            <li>Using the Extension lawfully and ethically</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. License and Restrictions</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">4.1 License Grant</h3>
          <p className="mb-4">
            We grant you a limited, non-exclusive, non-transferable, revocable license to use Prefiller for personal or commercial purposes, subject to these Terms.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Restrictions</h3>
          <p className="mb-2">You may NOT:</p>
          <ul className="space-y-1 mb-6 list-disc pl-6">
            <li>Use the Extension for illegal, fraudulent, or malicious purposes</li>
            <li>Use the Extension to violate any website's terms of service</li>
            <li>Attempt to circumvent security measures or access controls</li>
            <li>Use the Extension to spam, harass, or abuse others</li>
            <li>Remove or modify any copyright, trademark, or proprietary notices</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. API Keys and Third-Party Services</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">5.1 No Prefiller Account Required</h3>
          <p className="mb-4">Prefiller does not require you to create an account with us.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">5.2 AI Provider Accounts</h3>
          <p className="mb-2">To use cloud-based AI providers, you must:</p>
          <ul className="space-y-1 mb-4">
            <li>Create accounts with the AI provider (Groq, Gemini, or Claude)</li>
            <li>Obtain API keys from those providers</li>
            <li>Comply with their terms of service and usage policies</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">5.3 API Key Responsibilities</h3>
          <p className="mb-2">You are responsible for:</p>
          <ul className="space-y-1 mb-6">
            <li>Keeping your API keys confidential</li>
            <li>Any usage and charges incurred under your API keys</li>
            <li>Complying with AI provider rate limits and usage policies</li>
            <li>Revoking compromised API keys immediately</li>
          </ul>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 my-6">
            <h4 className="font-semibold mb-2">Important: API Costs</h4>
            <p className="text-sm">We are not responsible for any costs or charges incurred from AI provider usage. Review provider pricing before use.</p>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Privacy and Data</h2>
          <p className="mb-4">
            Our collection and use of your information is governed by our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference.
          </p>
          <ul className="space-y-1 mb-6">
            <li>All data is stored locally on your device</li>
            <li>We do not have servers or collect your data</li>
            <li>You are the data controller for your own information</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Acceptable Use</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Permitted Uses</h3>
          <ul className="space-y-1 mb-4 list-disc pl-6">
            <li>Fill legitimate web forms with accurate information</li>
            <li>Save time on repetitive form filling tasks</li>
            <li>Improve form filling accuracy</li>
            <li>Use for personal or commercial purposes</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Prohibited Uses</h3>
          <ul className="space-y-1 mb-6 list-disc pl-6">
            <li>Submit false, fraudulent, or misleading information</li>
            <li>Automate abuse, spam, or malicious activity</li>
            <li>Violate any laws or regulations</li>
            <li>Bypass website security measures or CAPTCHAs</li>
            <li>Create fake accounts or identities</li>
            <li>Manipulate voting, surveys, or contests</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Disclaimers and Warranties</h2>

          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 my-6">
            <h3 className="text-lg font-semibold mb-3">"AS IS" and "AS AVAILABLE"</h3>
            <p className="mb-3">PREFILLER IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
            <p className="text-sm">We disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, and accuracy of form fills.</p>
          </div>

          <p className="mb-4">
            AI-generated form fills may contain errors, inaccuracies, or inappropriate content. You are responsible for reviewing and verifying all AI-generated suggestions before submission.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
          <p className="mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul className="space-y-1 mb-4 list-disc pl-5">
            <li>Lost profits or revenue</li>
            <li>Lost data or information</li>
            <li>Business interruption</li>
            <li>Costs of substitute services</li>
          </ul>
          <p className="mb-6">
            Our total liability for all claims shall not exceed $100 USD.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Third-Party AI Provider Terms</h2>
          <p className="mb-4">When using AI providers, you agree to comply with their terms:</p>
          <div className="space-y-3 mb-6">
            <div className="border border-border rounded-lg p-3">
              <p className="font-semibold mb-1">Groq</p>
              <a href="https://groq.com/terms-of-service/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Terms of Service</a>
            </div>
            <div className="border border-border rounded-lg p-3">
              <p className="font-semibold mb-1">Google Gemini</p>
              <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Terms of Service</a>
            </div>
            <div className="border border-border rounded-lg p-3">
              <p className="font-semibold mb-1">Anthropic Claude</p>
              <a href="https://www.anthropic.com/legal/consumer-terms" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Consumer Terms</a>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Information</h2>
          <p className="mb-4">For questions about these Terms:</p>
          <ul className="space-y-1 mb-6">
            <li><strong>GitHub Repository:</strong> <a href="https://github.com/elitekaycy/seamless-form-filler" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/elitekaycy/seamless-form-filler</a></li>
            <li><strong>Issues/Support:</strong> <a href="https://github.com/elitekaycy/seamless-form-filler/issues" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub Issues</a></li>
            <li><strong>Email:</strong> dicksonanyaele1234@gmail.com</li>
          </ul>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold mb-3">Summary (TL;DR)</h3>
            <ul className="space-y-2 list-disc pl-6">
              <li>You can use Prefiller for personal or commercial purposes</li>
              <li>Open source software - audit the code yourself</li>
              <li>Review AI-generated form fills before submission</li>
              <li>You're responsible for API key costs and usage</li>
              <li>Comply with AI provider and website terms of service</li>
              <li>Don't use for illegal, fraudulent, or abusive purposes</li>
              <li>No warranties - provided "as is"</li>
              <li>We're not liable for damages, lost data, or API costs</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Agreement</h2>
          <p className="mb-8">
            By clicking "Install", "Accept", or using Prefiller, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, do not install or use Prefiller.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Prefiller. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
