import { Truck, Shield, Users, Package, MapPin, Wrench, Lightbulb, FileText, Network, Scale, Map, TrendingUp, Target, Leaf, Lock } from 'lucide-react';

const courses = [
  { icon: Truck, title: 'Transport Business & Fleet Management' },
  { icon: Shield, title: 'Drivers Ethics & Safety' },
  { icon: Users, title: 'Transportation & Customer Relations' },
  { icon: Package, title: 'Transportation Logistics & Operations' },
  { icon: MapPin, title: 'Urban Mobility & Smart Transport' },
  { icon: Wrench, title: 'Vehicle Maintenance for Non-Engineers' },
  { icon: Lightbulb, title: 'Digital Transport Entrepreneurship' },
  { icon: FileText, title: 'Transportation Management & Administration' },
  { icon: Network, title: 'Supply Chain Fundamentals' },
  { icon: Scale, title: 'Transport Policy' },
  { icon: Map, title: 'Transport Planning & Operations' },
  { icon: TrendingUp, title: 'Transportation Economics & Financing' },
  { icon: Target, title: 'Logistics Business Strategy & Planning' },
  { icon: Leaf, title: 'Sustainable Urban Transportation' },
  { icon: Lock, title: 'Transport Security & Risk Management' }
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#001F54] via-[#002a75] to-[#001F54] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full text-sm font-semibold">
              15 FLAGSHIP PROGRAMS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Course Catalogue
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Launching with 15 carefully selected programs covering the entire transport value chain.
            100+ courses in development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-[#FF6B35]/50 hover:transform hover:scale-105"
            >
              <course.icon className="text-[#FF6B35] mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-semibold text-white leading-snug">
                {course.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6">Every Course Includes:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Practical modules with real-world applications',
              'Industry-aligned learning outcomes',
              'Real-life case studies from African transport sector',
              'Professional certification upon completion'
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-[#FF6B35] w-2 h-2 rounded-full mt-2 shrink-0"></div>
                <p className="text-gray-200">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}