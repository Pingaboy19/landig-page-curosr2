import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dumbbell, Users, HeartPulse } from "lucide-react";

const features = [
  {
    icon: <Dumbbell className="h-8 w-8 text-primary" />,
    title: "Equipos Modernos",
    description: "Accede a una amplia gama de máquinas y pesas de alta calidad para todos los niveles.",
    delay: "0.2s",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Clases Grupales",
    description: "Participa en clases energéticas como Yoga, Spinning y HIIT, dirigidas por instructores certificados.",
    delay: "0.4s",
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    title: "Entrenamiento Personal",
    description: "Recibe planes de entrenamiento personalizados y la guía de nuestros expertos para alcanzar tus metas.",
    delay: "0.6s",
  },
];

export const Features = () => {
  return (
    <section id="features" className="container py-12 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿Por Qué Elegirnos?</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
          Estamos comprometidos con tu éxito. Descubre las ventajas que nos hacen diferentes.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <Card 
            key={feature.title} 
            className="animate-fade-in-up"
            style={{ animationDelay: feature.delay }}
          >
            <CardHeader className="items-center text-center">
              {feature.icon}
              <CardTitle className="mt-4">{feature.title}</CardTitle>
              <CardDescription className="mt-2">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};