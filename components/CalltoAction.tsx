import { ArrowRight, BookOpen, Users } from 'lucide-react';

export default function CallToAction() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#FF6B35] to-[#FF8555] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-white/90 mb-12 leading-relaxed">
          Join the new generation of trained, certified transport and logistics professionals
          shaping Africa&apos;s mobility future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="group bg-white text-[#FF6B35] px-8 py-4 rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 font-bold flex items-center justify-center gap-2 shadow-xl">
            <BookOpen size={20} />
            Enroll Now
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="bg-[#001F54] text-white px-8 py-4 rounded-lg hover:bg-[#002a75] transition-all transform hover:scale-105 font-bold shadow-xl">
            View Courses
          </button>
          <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-all border border-white/30 font-bold">
            <Users size={20} className="inline mr-2" />
            Partner With Us
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="text-4xl font-bold mb-2">100+</div>
            <div className="text-white/90">Courses in Development</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">15</div>
            <div className="text-white/90">Flagship Programs</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">#1</div>
            <div className="text-white/90">in Africa</div>
          </div>
        </div>
      </div>
    </section>
  );
}