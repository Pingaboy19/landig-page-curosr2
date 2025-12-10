import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Equipamiento de Última Generación",
    description: "Nuestras instalaciones cuentan con la mejor tecnología en fitness. Desde máquinas de cardio con pantallas interactivas hasta zonas de peso libre diseñadas ergonómicamente, todo está pensado para maximizar tu rendimiento.",
    points: ["Máquinas Technogym", "Zona de peso libre olímpico", "Área de cardio con TV"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    reverse: false,
  },
  {
    title: "Clases Grupales Motivadoras",
    description: "La energía del grupo te llevará más lejos. Únete a nuestras clases de Yoga, Spinning, HIIT, Zumba y más. Nuestros instructores certificados crearán un ambiente divertido y desafiante.",
    points: ["+50 clases semanales", "Instructores certificados", "Reserva desde la app"],
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop",
    reverse: true,
  },
  {
    title: "Entrenamiento Personalizado",
    description: "No estás solo en esto. Nuestros entrenadores personales diseñarán un plan a tu medida, adaptándose a tus objetivos, nivel y estilo de vida. Progreso real, medible y sostenible.",
    points: ["Evaluación física inicial", "Planes nutricionales", "Seguimiento 24/7"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    reverse: false,
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Experiencia Premium</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Redefinimos el concepto de gimnasio. Un espacio donde el diseño se encuentra con el rendimiento.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-8 md:gap-16 items-center ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="flex-1 w-full relative group">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="flex-1 space-y-6 animate-fade-in-up">
                <h3 className="text-3xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="group mt-4">
                  Saber más <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};