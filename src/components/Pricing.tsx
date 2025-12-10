import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "$29",
    description: "Ideal para empezar tu viaje en el fitness.",
    features: ["Acceso al gimnasio", "Clases grupales básicas", "Vestuarios y duchas"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "El plan más popular para resultados serios.",
    features: ["Todo en Básico", "Acceso a todas las clases", "Plan de nutrición inicial", "1 sesión de entrenador personal al mes"],
    popular: true,
  },
  {
    name: "Élite",
    price: "$79",
    description: "La experiencia completa para un rendimiento máximo.",
    features: ["Todo en Pro", "Entrenamiento personal ilimitado", "Acceso a spa y sauna", "Toallas y bebidas"],
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-12 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Planes de Membresía</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
          Elige el plan que mejor se adapte a tus objetivos. Sin contratos ocultos.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={`flex flex-col ${plan.popular ? 'border-primary ring-2 ring-primary' : ''}`}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="ml-1 text-muted-foreground">/mes</span>
              </div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                Seleccionar Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};