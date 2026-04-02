export default function MissionPage() {
  return (
    <div className="pt-24 p-10 max-w-5xl mx-auto space-y-12">

      {/* Mission */}
      <div>
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Our Mission
        </h1>

        <p className="text-gray-600 leading-relaxed">
          Our mission is to deliver reliable, high-quality manpower solutions 
          while maintaining trust, professionalism, and long-term relationships 
          with our clients across the globe.
        </p>
      </div>

      {/* Vision */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">
          Our Vision
        </h2>

        <p className="text-gray-600 leading-relaxed">
          To be a globally recognized manpower solutions provider known for 
          excellence, integrity, and commitment in delivering skilled workforce 
          to industries worldwide.
        </p>
      </div>

      {/* Core Values */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">
          Our Core Values
        </h2>

        <ul className="text-gray-600 space-y-2">
          <li>• Integrity and transparency in all operations</li>
          <li>• Commitment to quality and timely delivery</li>
          <li>• Strong client relationships and trust</li>
          <li>• Professionalism in recruitment and services</li>
        </ul>
      </div>

    </div>
  );
}