import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "$29",
    period: "/mes",
    description: "Ideal para empezar tu viaje en el fitness.",
    features: ["Acceso al gimnasio (Horario limitado)", "Clases grupales básicas", "Vestuarios y duchas", "App de seguimiento"],
    popular: false,
    delay: "0.2s"
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mes",
    description: "El plan más popular para resultados serios.",
    features: ["Acceso ilimitado 24/7", "Todas las clases incluidas", "Plan de nutrición inicial", "1 sesión de entrenador personal al mes", "Acceso a invitados (1/mes)"],
    popular: true,
    delay: "0.4s"
  },
  {
    name: "Élite",
    price: "$79",
    period: "/mes",
    description: "La experiencia completa para un rendimiento máximo.",
    features: ["Todo en Pro", "Entrenamiento personal ilimitado", "Acceso a spa y sauna", "Toallas y bebidas gratis", "Parking reservado"],
    popular: false,
    delay: "0.6s"
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Planes Simples y Transparentes</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
          Sin contratos de permanencia a largo plazo. Cancela cuando quieras.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card 
            key={plan.name} 
            className={`relative flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
              plan.popular 
                ? 'border-primary ring-2 ring-primary shadow-xl scale-105 z-10' 
                : 'border-border'
            } animate-fade-in-up`}
            style={{ animationDelay: plan.delay }}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Más Popular
              </div>
            )}
            
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            
            <CardContent className="flex-grow">
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                <span className="ml-1 text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 rounded-full p-1 dark:bg-green-900">
                      <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter>
              <Button 
                className={`w-full py-6 text-lg ${plan.popular ? 'shadow-lg hover:shadow-primary/25' : ''}`} 
                variant={plan.popular ? 'default' : 'outline'}
              >
                Elegir {plan.name}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};