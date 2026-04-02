export default function AboutPage() {
  return (
    <div className="pt-24 p-10 max-w-6xl mx-auto space-y-12">

      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          About Us
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Arzu International Manpower Consultant is a global recruitment 
          organization providing quality manpower solutions across industries.
        </p>
      </div>

      {/* Company Overview */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">
          Who We Are
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Established in 1976, Arzu International has been a trusted name in 
          manpower recruitment for decades. We specialize in sourcing and 
          deploying skilled workforce from India and Nepal to leading companies 
          across the Middle East including Saudi Arabia, UAE, Qatar, Oman, 
          Bahrain, and Kuwait.
        </p>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">
          Our Experience
        </h2>
        <p className="text-gray-600 leading-relaxed">
          With over 45 years of experience and more than 25,000 successful 
          placements, we have built strong relationships with reputed 
          organizations across various industries such as construction, 
          oil & gas, healthcare, engineering, and hospitality.
        </p>
      </div>

      {/* Founder Section */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">
          Leadership
        </h2>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-2">
            Zubair Khan
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Founder of Arzu International, Zubair Khan has played a key role 
            in establishing the company as a reliable manpower solutions 
            provider. With decades of industry experience, his vision and 
            leadership have helped build long-term trust with clients and 
            deliver consistent results in international recruitment.
          </p>
        </div>
      </div>

    </div>
  );
}