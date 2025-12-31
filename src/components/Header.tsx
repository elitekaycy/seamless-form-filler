import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">P</span>
          </div>
          <span className="text-xl font-semibold text-foreground">Prefiller</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Button variant="nav" size="sm">How It Works</Button>
          <Button variant="nav" size="sm">Features</Button>
          <Button variant="nav" size="sm">Pricing</Button>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:flex text-foreground/70 hover:text-foreground">
            Sign In
          </Button>
          <Button variant="hero" size="default" className="gap-2">
            <Chrome className="w-4 h-4" />
            <span className="hidden sm:inline">Add To Chrome</span>
            <span className="sm:hidden">Install</span>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;