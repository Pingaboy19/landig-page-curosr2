import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax-like effect via object-cover fixed is tricky on mobile, so we use absolute */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
          alt="Gym background"
          className="h-full w-full object-cover"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 container h-full flex flex-col justify-center text-white px-4 md:px-6">
        <div className="max-w-3xl space-y-6">
          <div className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary-foreground text-sm font-medium mb-4 animate-fade-in-up">
            💪 El mejor gimnasio de la ciudad
          </div>
          
          <h1 
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Tu Transformación <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Comienza Aquí
            </span>
          </h1>
          
          <p 
            className="text-xl text-gray-200 max-w-xl animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Únete a GymFlex y descubre una nueva versión de ti mismo. Instalaciones premium, entrenadores expertos y una comunidad que te impulsa.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-black hover:bg-gray-200 transition-transform hover:scale-105">
              Prueba Gratuita
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10 hover:text-white transition-transform hover:scale-105 group">
              Ver Planes <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-white/50">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  );
};