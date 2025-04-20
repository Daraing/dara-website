import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Smart Design for the Future of Mobility
              </h2>
              <Separator className="my-6 bg-blue-500 h-1 w-20" />
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                At Dara, we're passionate about revolutionizing mechanical design for automotive components. Our team combines deep engineering expertise with cutting-edge AI technology to deliver superior results.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Founded by automotive industry veterans, we understand the challenges of modern manufacturing and design. Our mission is to help companies reduce development time, optimize performance, and create innovative solutions that shape the future of transportation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</h3>
                <p className="text-gray-600 dark:text-gray-400">Years of combined experience</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</h3>
                <p className="text-gray-600 dark:text-gray-400">Successful projects delivered</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">30%</h3>
                <p className="text-gray-600 dark:text-gray-400">Average design time reduction</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">24/7</h3>
                <p className="text-gray-600 dark:text-gray-400">Technical support</p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/mechanical-tech.jpg"
              fill
              style={{ objectFit: "cover" }}
              alt="Mechanical design technology"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Modern Engineering</h3>
              <p className="text-white/80">
                Blending traditional engineering principles with AI-enhanced tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
