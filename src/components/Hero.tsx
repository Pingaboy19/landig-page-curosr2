import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full">
      <div className="absolute inset-0 bg-black/60" />
      <img
        src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2071&auto=format&fit=crop"
        alt="Persona haciendo ejercicio en un gimnasio"
        className="h-full w-full object-cover"
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <h1 
          className="text-4xl md:text-6xl font-bold tracking-tighter animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Desata tu Potencial
        </h1>
        <p 
          className="mt-4 max-w-2xl text-lg text-muted-foreground animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Únete a nuestra comunidad y transforma tu cuerpo y mente. Ofrecemos equipos de última generación, clases inspiradoras y entrenadores expertos.
        </p>
        <Button 
          size="lg" 
          className="mt-8 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          Comienza Hoy
        </Button>
      </div>
    </section>
  );
};