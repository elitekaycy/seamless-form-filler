import { Link } from "react-router-dom";
import Header from "@/components/Header";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 pt-24">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy for Prefiller</h1>
        <p className="text-muted-foreground mb-8">
          <strong>Last Updated:</strong> December 31, 2025<br />
          <strong>Effective Date:</strong> December 31, 2025
        </p>

        <section className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p className="mb-4">
            Prefiller ("we", "our", or "the extension") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use the Prefiller Chrome Extension.
          </p>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
            <h3 className="text-lg font-semibold mb-3">Key Privacy Principles:</h3>
            <ul className="space-y-2 list-disc pl-6">
              <li><strong>All data stored locally</strong> on your device only</li>
              <li><strong>No data collection</strong> or analytics tracking</li>
              <li><strong>No third-party sharing</strong> of your information</li>
              <li><strong>You control your data</strong> - delete anytime</li>
              <li><strong>Transparent operation</strong> - open source code available</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">1. API Keys (Optional)</h3>
          <ul className="space-y-1 mb-4 list-disc pl-6">
            <li><strong>What:</strong> Your AI provider API keys (Groq, Gemini, Claude)</li>
            <li><strong>Why:</strong> Required to authenticate requests to AI services</li>
            <li><strong>Storage:</strong> Encrypted and stored locally in Chrome's storage API</li>
            <li><strong>Access:</strong> Only you and the selected AI provider</li>
            <li><strong>Deletion:</strong> You can delete anytime via extension settings</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">2. Uploaded Documents</h3>
          <ul className="space-y-1 mb-4 list-disc pl-6">
            <li><strong>What:</strong> PDF, TXT, DOC, DOCX files you upload</li>
            <li><strong>Why:</strong> To extract information for form filling</li>
            <li><strong>Storage:</strong> Stored locally in Chrome's storage API</li>
            <li><strong>Processing:</strong> Parsed locally using client-side libraries</li>
            <li><strong>Deletion:</strong> You can remove documents anytime via extension UI</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">3. Extension Settings</h3>
          <ul className="space-y-1 mb-4 list-disc pl-6">
            <li><strong>What:</strong> Selected AI provider, extension enabled/disabled state</li>
            <li><strong>Why:</strong> To remember your preferences</li>
            <li><strong>Storage:</strong> Stored locally in Chrome's storage API</li>
            <li><strong>Access:</strong> Only you</li>
            <li><strong>Deletion:</strong> Cleared when you uninstall the extension</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">4. Form Data (Temporary)</h3>
          <ul className="space-y-1 mb-4 list-disc pl-6">
            <li><strong>What:</strong> Form fields detected on web pages</li>
            <li><strong>Why:</strong> To analyze and fill forms with your document data</li>
            <li><strong>Storage:</strong> Processed in memory only, never persisted</li>
            <li><strong>Retention:</strong> Discarded after form filling completes</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What We DO NOT Collect</h2>
          <ul className="space-y-2 mb-6 list-disc pl-6">
            <li><strong>No analytics or tracking</strong> - We don't track how you use the extension</li>
            <li><strong>No usage statistics</strong> - We don't collect metrics or telemetry</li>
            <li><strong>No personal information</strong> - Name, email, phone number not collected by us</li>
            <li><strong>No browsing history</strong> - We don't track which websites you visit</li>
            <li><strong>No form data storage</strong> - Form information is processed in memory only</li>
            <li><strong>No cookies</strong> - We don't set any tracking cookies</li>
            <li><strong>No server uploads</strong> - No data is sent to our servers (we don't have servers!)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Storage and Security</h2>
          <p className="mb-4">
            All data is stored locally on your device using Chrome's Storage API. <strong>We do not have servers.</strong> We do not upload your data anywhere except to the AI provider you select.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Encryption</h3>
          <p className="mb-4">API keys are encrypted using the Web Crypto API:</p>
          <ul className="space-y-1 mb-4 list-disc pl-6">
            <li><strong>Algorithm:</strong> AES-GCM (256-bit encryption)</li>
            <li><strong>Key Derivation:</strong> PBKDF2 with 100,000 iterations</li>
            <li><strong>Salt:</strong> Randomly generated per encryption</li>
            <li><strong>Storage:</strong> Encrypted ciphertext stored in Chrome storage</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
          <p className="mb-4">When you use Prefiller, data is sent to the AI provider you selected:</p>

          <div className="space-y-4 mb-6">
            <div className="border border-border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Groq</h4>
              <p className="text-sm mb-2"><strong>Privacy Policy:</strong> <a href="https://groq.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://groq.com/privacy-policy/</a></p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Google Gemini</h4>
              <p className="text-sm mb-2"><strong>Privacy Policy:</strong> <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ai.google.dev/gemini-api/terms</a></p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Anthropic Claude</h4>
              <p className="text-sm mb-2"><strong>Privacy Policy:</strong> <a href="https://www.anthropic.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.anthropic.com/legal/privacy</a></p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Chrome AI (Built-in)</h4>
              <p className="text-sm">All processing happens locally on your device. Requires Chrome 127+ with AI features enabled.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights and Choices</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">Delete Your Data</h3>
          <ul className="space-y-1 mb-4 list-disc pl-6">
            <li><strong>Delete API Key:</strong> Settings → Click trash icon next to provider</li>
            <li><strong>Delete Documents:</strong> Documents tab → Click delete button per document</li>
            <li><strong>Delete All:</strong> Uninstall the extension</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
          <p className="mb-4">
            Prefiller is not intended for use by children under 13 years of age. We do not knowingly collect information from children.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">If you have questions about this Privacy Policy:</p>
          <ul className="space-y-1 mb-6 list-disc pl-6">
            <li><strong>GitHub Issues:</strong> <a href="https://github.com/elitekaycy/prefiller/issues" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/elitekaycy/prefiller/issues</a></li>
            <li><strong>Email:</strong> dicksonanyaele1234@gmail.com</li>
          </ul>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold mb-3">Summary (TL;DR)</h3>
            <ul className="space-y-2 list-disc pl-6">
              <li><strong>Your data stays on your device</strong> - We don't have servers</li>
              <li><strong>API keys are encrypted</strong> - AES-256 encryption</li>
              <li><strong>Documents stored locally</strong> - In Chrome's storage</li>
              <li><strong>No tracking or analytics</strong> - Zero telemetry</li>
              <li><strong>No data selling</strong> - We don't monetize your data</li>
              <li><strong>You control everything</strong> - Delete data anytime</li>
              <li><strong>Open source</strong> - Code is auditable</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Agreement</h2>
          <p className="mb-8">
            By installing and using Prefiller, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. If you do not agree with this policy, please do not use Prefiller.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Prefiller. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
