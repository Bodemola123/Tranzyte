import { Car, Building2, Bike, Users, Landmark, MapPin, Package, UserPlus } from 'lucide-react';

const audiences = [
  { icon: Car, title: 'Drivers', description: 'Private & commercial vehicle operators' },
  { icon: Building2, title: 'Fleet Owners', description: 'Transport entrepreneurs & business owners' },
  { icon: Bike, title: 'Dispatch Riders', description: 'Logistics & delivery professionals' },
  { icon: Users, title: 'Transport Managers', description: 'Company operations managers' },
  { icon: Landmark, title: 'Government Officials', description: 'Transport ministry & regulatory staff' },
  { icon: MapPin, title: 'Urban Planners', description: 'City mobility & infrastructure experts' },
  { icon: Package, title: 'Logistics Professionals', description: 'Supply chain & logistics staff' },
  { icon: UserPlus, title: 'Young Professionals', description: 'Those entering the transport sector' }
];

export default function WhoItsFor() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#001F54] mb-4">
            Who Tranzyte Is For
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you operate one vehicle or manage an entire transport system, we have a course for you
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#FF6B35]/30 text-center"
            >
              <div className="bg-linear-to-br from-[#001F54] to-[#002a75] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-[#FF6B35] group-hover:to-[#FF8555] transition-all duration-300">
                <audience.icon className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#001F54] mb-2">
                {audience.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-linear-to-r from-[#001F54] to-[#002a75] rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Leadership & Faculty
          </h3>
          <div className="max-w-4xl mx-auto space-y-6 text-left">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h4 className="text-xl font-bold text-[#FF6B35] mb-2">
                Abideen Olamilekan - Founder & Head of Academy
              </h4>
              <p className="text-gray-200">
                Master of Urban Logistics & Transport Policy, University of Lagos
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h4 className="text-xl font-bold text-[#FF6B35] mb-2">
                Dr. Agunloye Olayinka - Lead Instructor
              </h4>
              <p className="text-gray-200">
                Associate Professor of Logistics & Transport, University of Lagos
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <p className="text-gray-200 text-center">
                Plus expert instructors including Makinde Damilare, Pedro Akinnubi,
                Fagbohun Boluwatife, and Akinlagun Ololade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}