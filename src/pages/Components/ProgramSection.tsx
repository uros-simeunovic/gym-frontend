import { Heart, ArrowUpRight } from "lucide-react";

export default function ProgramSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          {/* <h3 className="text-[#f96294] font-medium mb-4">
            KAKO FUNKCIONIŠE PROGRAM?
          </h3> */}
          <h2 className="text-5xl font-bold text-[#f96294] mb-6">
            2 Koraka Do Rezultata
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 flex items-center justify-center mb-6">
              <Heart className="w-16 h-16 text-rose-400 stroke-1" />
            </div>
            <h3 className="text-2xl font-bold text-[#f96294] mb-4">
              Zamisli koliko sjajno mozes da izgledaš.
            </h3>
            <p className="text-gray-600"></p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 flex items-center justify-center mb-6 relative">
              <div className="w-14 h-8 bg-rose-200 rounded-full absolute"></div>
              <div className="relative">
                <div className="w-12 h-1 bg-rose-400 rounded-full absolute top-0 left-0"></div>
                <div className="w-3 h-8 bg-rose-400 rounded-full absolute -top-3 left-0"></div>
                <div className="w-3 h-8 bg-rose-400 rounded-full absolute -top-3 right-0"></div>
                <ArrowUpRight className="w-6 h-6 text-rose-400 absolute -top-8 right-0" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#f96294] mb-4">
              Kreni - niko neće umesto tebe.
            </h3>
            <p className="text-gray-600"></p>
          </div>
        </div>
      </div>
    </section>
  );
}
