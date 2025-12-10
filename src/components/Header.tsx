import { Button } from "@/components/ui/button";
import { Mountain } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold">
          <Mountain className="h-6 w-6" />
          <span>GymFlex</span>
        </a>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <a href="#features" className="text-muted-foreground transition-colors hover:text-foreground">
            Características
          </a>
          <a href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">
            Precios
          </a>
          <a href="#testimonials" className="text-muted-foreground transition-colors hover:text-foreground">
            Testimonios
          </a>
        </nav>
        <Button>Únete Ahora</Button>
      </div>
    </header>
  );
};