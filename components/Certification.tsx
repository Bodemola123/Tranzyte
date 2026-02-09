import React from 'react'

const Certification = () => {
  return (
    <section className="relative bg-[#001F54] text-white py-24 px-6 lg:px-12 overflow-hidden">
      {/* Orange Accent Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF6B35]/20 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FF6B35]/10 blur-3xl rounded-full z-0" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE - Certification */}
        <div>
          <p className="text-[#FF6B35] font-semibold tracking-widest uppercase mb-4">
            Certification & Learning Model
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8">
            What You Get
          </h2>

          <ul className="space-y-5">
            {[
              "Industry-relevant certification",
              "Practical knowledge you can apply immediately",
              "Career advancement and business growth skills",
              "Access to an expanding professional network",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-3 h-3 mt-2 bg-[#FF6B35] rounded-full shrink-0" />
                <p className="text-lg text-gray-200 leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE - Why Tranzyte */}
        <div className="bg-white text-[#001F54] p-10 rounded-2xl shadow-2xl">
          <p className="text-[#FF6B35] font-semibold tracking-widest uppercase mb-4">
            Why Tranzyte Stands Out
          </p>

          <ul className="space-y-4 mb-8">
            {[
              "Transport-focused (not generic business training)",
              "Designed for African realities, global relevance",
              "Strong academic + industry blend",
              "Deep government and private-sector alignment",
              "Built for scalability, professionalism, and impact",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#FF6B35] font-bold">—</span>
                <p className="text-lg leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-2xl font-bold mb-3">
              Tranzyte is not just a school.
            </h3>
            <p className="text-lg text-gray-700 font-medium">
              It is the future of transport education in Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certification
