import { ArrowRight, BookOpen, Award } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#001F54] via-[#002a75] to-[#001F54] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B35] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-block mb-6">
              <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                #1 IN AFRICA
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The Number One Pathway to{' '}
              <span className="text-[#FF6B35]">Transport & Logistics</span> Mastery
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Professional training for Africa&apos;s transport and logistics future. From road to rail,
              ports to aviation, logistics to urban mobility.
            </p>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#FF6B35] mb-8">
              Learn. Get Certified. Lead the Industry.
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group cursor-pointer bg-[#FF6B35] text-white px-8 py-4 rounded-lg hover:bg-[#FF8555] transition-all transform hover:scale-105 font-semibold flex items-center justify-center gap-2 shadow-lg">
                Explore Our Courses
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-white/10  cursor-pointer backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all border border-white/20 font-semibold">
                Learn More
              </button>
            </div>

            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="bg-[#FF6B35]/20 p-3 rounded-lg">
                  <BookOpen className="text-[#FF6B35]" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-gray-300 text-sm">Courses</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#FF6B35]/20 p-3 rounded-lg">
                  <Award className="text-[#FF6B35]" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold">Certified</div>
                  <div className="text-gray-300 text-sm">Professionals</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <Image
                src="/Bill.jpeg"
                alt="Transport and Logistics"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-[#001F54] font-bold text-3xl mb-1">15</div>
                <div className="text-gray-600 text-sm">Flagship Programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}