import { Target, Award, Users, Briefcase, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Industry-Focused Education',
    description: 'Transport-specific training, not generic business courses'
  },
  {
    icon: Briefcase,
    title: 'Practical Curriculum',
    description: 'Real-world case studies and immediately applicable knowledge'
  },
  {
    icon: Award,
    title: 'Global Certification',
    description: 'Internationally recognized credentials that advance your career'
  },
  {
    icon: Users,
    title: 'Government Aligned',
    description: 'Partnered with public and private sector organizations'
  },
  {
    icon: GraduationCap,
    title: 'Expert Instructors',
    description: 'Learn from seasoned academics and industry professionals'
  }
];

export default function WhyTranzyte() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#001F54] mb-4">
            Why Choose Tranzyte?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A new layer of competence in a sector where licensing alone is no longer enough
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FF6B35]/20 hover:transform hover:scale-105"
            >
              <div className="bg-linear-to-br from-[#001F54] to-[#002a75] w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:from-[#FF6B35] group-hover:to-[#FF8555] transition-all duration-300">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#001F54] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}