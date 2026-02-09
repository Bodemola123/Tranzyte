import { Target, Eye, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#001F54] mb-6">
              Building Africa&apos;s Transport Leaders
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Tranzyte is a specialized transport and logistics academy built to raise professional
              standards across Africa&apos;s mobility ecosystem. We ensure that everyone involved in the
              movement of people and goods has access to structured, practical, and world-class
              transport education.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Professionalism should be the norm, not the exception',
                'Training should be accessible and practical',
                'Africa\'s transport future depends on skilled, informed people'
              ].map((belief, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#FF6B35] shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">{belief}</p>
                </div>
              ))}
            </div>

            <p className="text-xl font-semibold text-[#001F54]">
              We are building the next generation of transport leaders, innovators, and professionals.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-linear-to-br from-[#001F54] to-[#002a75] p-8 rounded-2xl text-white">
              <Target className="text-[#FF6B35] mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-200 leading-relaxed">
                To equip individuals and institutions across Africa&apos;s transport and logistics sector
                with the knowledge, skills, and certification needed to operate safely, efficiently,
                and competitively.
              </p>
            </div>

            <div className="bg-linear-to-br from-[#FF6B35] to-[#FF8555] p-8 rounded-2xl text-white">
              <Eye className="text-white mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To become Africa&apos;s most trusted transport and logistics education hub and the official
                talent pipeline for the continent&apos;s mobility industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}