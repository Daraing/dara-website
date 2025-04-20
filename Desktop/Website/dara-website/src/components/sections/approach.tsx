import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Approach() {
  const approaches = [
    {
      id: "ai-enhanced",
      title: "AI-Enhanced Design",
      description:
        "Our AI-powered design tools analyze thousands of design possibilities to recommend optimal solutions. This technology helps identify potential issues early, accelerates the design process, and generates innovative approaches that might not be immediately obvious to human designers.",
      benefits: [
        "50% faster design iterations",
        "Early detection of design flaws",
        "Broader exploration of design possibilities",
        "Data-driven optimization recommendations",
      ],
      image: "/images/ai-tech.jpg",
    },
    {
      id: "manufacturing-ready",
      title: "Manufacturing-Ready Design",
      description:
        "We design with manufacturing in mind from day one. Our approach considers material selection, manufacturing constraints, and assembly processes to ensure that your designs can be efficiently produced at scale.",
      benefits: [
        "Reduced manufacturing costs",
        "Designs optimized for specific manufacturing processes",
        "Material selection guidance",
        "Design for assembly and maintenance",
      ],
      image: "/images/car-suspension.jpg",
    },
    {
      id: "collaborative",
      title: "Collaborative Process",
      description:
        "We believe the best designs emerge from close collaboration between our team and yours. Our transparent process keeps you informed at every stage, with regular check-ins and clear communication about design decisions.",
      benefits: [
        "Regular progress updates",
        "Iterative feedback process",
        "Seamless integration with your engineering team",
        "Adaptable to changing requirements",
      ],
      image: "/images/mechanical-design.jpg",
    },
  ];

  return (
    <section id="approach" className="py-20 bg-white dark:bg-gray-950">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We combine cutting-edge technology with proven engineering principles
            to deliver exceptional results.
          </p>
        </div>

        <Tabs defaultValue="ai-enhanced" className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3">
            {approaches.map((approach) => (
              <TabsTrigger key={approach.id} value={approach.id} className="text-sm md:text-base">
                {approach.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {approaches.map((approach) => (
            <TabsContent key={approach.id} value={approach.id} className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">{approach.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {approach.description}
                  </p>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {approach.benefits.map((benefit, index) => (
                        <li key={`${approach.id}-benefit-${index}`} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={approach.image}
                    fill
                    style={{ objectFit: "cover" }}
                    alt={approach.title}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
