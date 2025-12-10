import { Mountain, Twitter, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Mountain className="h-6 w-6" />
          <span className="font-bold text-lg">GymFlex</span>
        </div>
        <p className="text-sm text-muted-foreground">&copy; 2024 GymFlex. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-background transition-colors"><Twitter /></a>
          <a href="#" className="text-muted-foreground hover:text-background transition-colors"><Instagram /></a>
          <a href="#" className="text-muted-foreground hover:text-background transition-colors"><Facebook /></a>
        </div>
      </div>
    </footer>
  );
};