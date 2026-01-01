# Prefiller Landing Page

> **AI-Powered Form Filling** - Smart, secure, and time-saving Chrome extension

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://elitekaycy.github.io/seamless-form-filler/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-blue)](https://github.com/elitekaycy/seamless-form-filler)

## 🌐 Live Site

**Landing Page:** [https://elitekaycy.github.io/seamless-form-filler/](https://elitekaycy.github.io/seamless-form-filler/)

**Legal Pages:**
- Privacy Policy: [/privacy-policy](https://elitekaycy.github.io/seamless-form-filler/privacy-policy)
- Terms of Service: [/terms-of-service](https://elitekaycy.github.io/seamless-form-filler/terms-of-service)

## 📖 About

This is the official landing page for **Prefiller**, an AI-powered Chrome extension that automatically fills web forms using information from your uploaded documents.

### Key Features Highlighted

- 🤖 **4 AI Providers Supported** - Groq, Google Gemini, Anthropic Claude, Chrome AI
- 🔒 **Privacy-Focused** - All data stored locally, AES-256 encryption
- ⚡ **Fast & Efficient** - Intelligent form field detection
- ♿ **Accessible** - WCAG 2.1 Level AA compliant
- 🎨 **Beautiful UI** - Interactive demo showing extension in action

## 🛠️ Built With

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **shadcn/ui** - Component library
- **React Router** - Client-side routing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ ([install with nvm](https://github.com/nvm-sh/nvm))
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/elitekaycy/seamless-form-filler.git

# Navigate to project directory
cd seamless-form-filler

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

## 📦 Deployment

### GitHub Pages (Automatic)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

**GitHub Actions Workflow:** `.github/workflows/github-pages.yml`

### Docker

```bash
# Build Docker image
docker build -t prefiller-landing .

# Run container
docker run -p 8080:80 prefiller-landing
```

**Docker Hub (Automatic):** Pushes to `dev` branch trigger Docker build

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment guide.

## 📁 Project Structure

```
seamless-form-filler/
├── src/
│   ├── components/
│   │   ├── ExtensionDemo.tsx    # Interactive form-filling demo
│   │   ├── Header.tsx            # Navigation header
│   │   ├── HeroSection.tsx       # Landing page hero
│   │   └── ui/                   # shadcn/ui components
│   ├── pages/
│   │   ├── Index.tsx             # Home page
│   │   ├── PrivacyPolicy.tsx     # Privacy policy
│   │   └── TermsOfService.tsx    # Terms of service
│   ├── App.tsx                   # Router configuration
│   └── main.tsx                  # App entry point
├── public/
│   ├── favicon.ico               # Site icons
│   └── 404.html                  # SPA routing fallback
├── .github/workflows/
│   ├── github-pages.yml          # Pages deployment
│   └── docker-push.yml           # Docker Hub deployment
├── Dockerfile                    # Docker configuration
├── nginx.conf                    # Nginx server config
└── vite.config.ts                # Vite configuration
```

## 🎨 Color Scheme

The landing page uses a vibrant color scheme matching the Prefiller brand:

- **Primary (Pink/Magenta):** `#EB1A99` (HSL 330, 80%, 52%)
- **Accent (Blue):** `#3098F8` (HSL 207, 80%, 58%)
- **Background (Navy):** `#0F1429` (HSL 222, 47%, 11%)
- **Success (Green):** Emerald-500 for form fill indicators

## 🔗 Related Links

- **Chrome Extension Repo:** [github.com/elitekaycy/prefiller](https://github.com/elitekaycy/prefiller) *(coming soon)*
- **Chrome Web Store:** *(coming soon)*
- **Documentation:** See [CHROME_WEB_STORE_SUBMISSION.md](./CHROME_WEB_STORE_SUBMISSION.md)

## 📄 Legal

- [Privacy Policy](https://elitekaycy.github.io/seamless-form-filler/privacy-policy)
- [Terms of Service](https://elitekaycy.github.io/seamless-form-filler/terms-of-service)
- **License:** MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**elitekaycy**
- GitHub: [@elitekaycy](https://github.com/elitekaycy)
- Email: dicksonanyaele1234@gmail.com

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Deployed on [GitHub Pages](https://pages.github.com/)

---

**© 2026 Prefiller. All rights reserved.**

*Privacy-focused. Secure. Transparent.*
