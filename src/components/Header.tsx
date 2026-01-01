import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";
import logo from "@/assets/preview-prefiller.png";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4">
            <nav className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="bg-white rounded-sm p-0.5 shadow-md border border-slate-200 w-8 h-8 flex items-center justify-center overflow-hidden">
                        <img src={logo} alt="Prefiller" className="w-24 h-24 object-cover" />
                    </div>
                    <span className="text-2xl font-semibold text-foreground">Prefiller</span>
                </div>

                {/* CTA */}
                <Button variant="hero" size="default" className="gap-2">
                    <Chrome className="w-4 h-4" />
                    <span className="hidden sm:inline">Add To Chrome</span>
                    <span className="sm:hidden">Install</span>
                </Button>
            </nav>
        </header>
    );
};

export default Header;
