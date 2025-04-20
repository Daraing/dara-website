import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Cog, Cpu, Layers, Rocket } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Layers className="w-10 h-10 text-blue-500" />,
      title: "3D Modeling",
      description: "Precision 3D modeling services for automotive parts with detailed specifications and high accuracy.",
      link: "#contact",
      image: "/images/mechanical-design.jpg",
    },
    {
      icon: <Cog className="w-10 h-10 text-blue-500" />,
      title: "Design Optimization",
      description: "Optimize your designs for performance, durability, and cost-efficiency using advanced engineering techniques.",
      link: "#contact",
      image: "/images/car-suspension.jpg",
    },
    {
      icon: <Rocket className="w-10 h-10 text-blue-500" />,
      title: "Prototyping",
      description: "Rapid prototyping services to quickly validate designs before moving to full production.",
      link: "#contact",
      image: "/images/mechanical-tech.jpg",
    },
    {
      icon: <Cpu className="w-10 h-10 text-blue-500" />,
      title: "AI-Assisted Design",
      description: "Leverage the power of AI to accelerate design cycles and explore innovative solutions.",
      link: "#contact",
      image: "/images/ai-tech.jpg",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-950">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We provide end-to-end mechanical design services to help companies innovate faster and more efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  fill
                  style={{ objectFit: "cover" }}
                  alt={service.title}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="p-0 h-auto gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                  <Link href={service.link}>
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
