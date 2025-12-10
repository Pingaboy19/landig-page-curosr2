import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const trainers = [
  {
    name: "Alex Rivera",
    role: "Head Coach & CrossFit",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1887&auto=format&fit=crop",
    social: ["twitter", "instagram"]
  },
  {
    name: "Sarah Jenkins",
    role: "Yoga & Pilates",
    image: "https://images.unsplash.com/photo-1609343007530-5b583f736173?q=80&w=1887&auto=format&fit=crop",
    social: ["instagram", "linkedin"]
  },
  {
    name: "Marco Díaz",
    role: "Musculación & Nutrición",
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1982&auto=format&fit=crop",
    social: ["instagram", "twitter"]
  },
  {
    name: "Elena Kovac",
    role: "HIIT & Cardio",
    image: "https://images.unsplash.com/photo-1611672585731-fa1060a7a3c2?q=80&w=1887&auto=format&fit=crop",
    social: ["instagram"]
  }
];

export const Trainers = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Conoce al Equipo</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Expertos apasionados dedicados a guiarte en cada paso de tu viaje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{trainer.name}</h3>
                <p className="text-gray-300 text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{trainer.role}</p>
                <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-black cursor-pointer transition-colors">
                    <Instagram size={16} />
                  </div>
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-black cursor-pointer transition-colors">
                    <Twitter size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};