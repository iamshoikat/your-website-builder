import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">R</span>
          </div>
          <span className="text-xl font-bold text-foreground">Rocket Grow</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground font-medium hover:text-primary transition-colors">Home</a>
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
          <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
          <a href="#templates" className="text-muted-foreground hover:text-primary transition-colors">Templates</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">লগ ইন</Button>
          <Button size="sm">Get Started</Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <a href="#" className="block text-foreground font-medium">Home</a>
          <a href="#features" className="block text-muted-foreground">Features</a>
          <a href="#pricing" className="block text-muted-foreground">Pricing</a>
          <a href="#templates" className="block text-muted-foreground">Templates</a>
          <div className="flex gap-3 pt-2">
            <Button variant="ghost" size="sm">লগ ইন</Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
