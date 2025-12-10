import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Ana García",
    avatar: "AG",
    title: "Miembro Satisfecho",
    quote: "¡El mejor gimnasio de la ciudad! El ambiente es increíble y los entrenadores son muy profesionales. He visto resultados asombrosos en poco tiempo.",
  },
  {
    name: "Carlos Pérez",
    avatar: "CP",
    title: "Atleta",
    quote: "Las instalaciones son de primera. Tienen todo el equipo que necesito para mi entrenamiento avanzado. Lo recomiendo al 100%.",
  },
  {
    name: "Sofía Rodríguez",
    avatar: "SR",
    title: "Principiante",
    quote: "Como principiante, me sentía intimidada, pero el personal me hizo sentir bienvenida y me ayudó a crear una rutina perfecta para mí. ¡Gracias!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-muted py-12 md:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Lo Que Dicen Nuestros Miembros</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Historias reales de personas reales que transformaron sus vidas con nosotros.
          </p>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto mt-12">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <p className="text-lg italic">"{testimonial.quote}"</p>
                      <div className="mt-6 flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${testimonial.name}`} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};