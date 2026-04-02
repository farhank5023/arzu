import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="pt-24 p-10 max-w-6xl mx-auto space-y-12">

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          About Us
        </h1>
      </div>

      {/* Main Description */}
      <div className="text-center">
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          <span className="font-bold">Arzu International Manpower Consultant</span> (Registration No. B-0772/UP/PART/1000+/5/9188/2016) is a global recruitment organization providing quality manpower solutions across various categories of recruitment. We specialize in executing recruitment contracts for industries such as construction, maintenance, hospitality, stevedoring, transport, heavy equipment operations, fishing and marine, electricity generation, transmission, distribution, fabrication, welding, and hotel and catering.
        </p>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          <span className="font-bold">Arzu International</span> is a professional HR, recruitment, selection, outsourcing, and manpower sourcing company. We provide various categories of workers including managers, engineers, accountants, supervisors, technicians (mechanics, drivers, operators, welders), fabricators, plumbers, electricians, carpenters, masons, and helpers. We supply skilled, semi-skilled, and unskilled workforces from India to different industries in Middle Eastern countries.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          Our head office is located in Mumbai, India. We emphasize offering affordable manpower solutions and aim to build long-lasting relationships with clients by providing high-quality candidates. We have successfully deployed a large workforce to major organizations globally.
        </p>
      </div>

      {/* Management Section - Text Left, Image Right */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="p-12">
          <h2 className="text-3xl font-bold mb-4">OUR MANAGEMENT</h2>
          <p className="text-lg leading-relaxed">
            Our company is managed by highly efficient & qualified team of Professionals who have ample experience in executing manpower contracts.
          </p>
        </div>
        <div className="relative h-80 w-full">
          <Image
            src="/images/about/prof.png"
            alt="Our Management"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Quality Policy Section - Image Left, Text Right */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-80 w-full">
          <Image
            src="/images/about/quality.png"
            alt="Quality Policy"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="p-12">
          <h2 className="text-3xl font-bold mb-4">QUALITY POLICY</h2>
          <p className="text-lg leading-relaxed">
            We take responsibility of the authenticity and reliability of our candidates. We ensure that the quality of candidates confirm to international standards by appointing trade test organization to vet candidates who apply to us. We also make sure every candidate reaches his sponsor at the promised time.
          </p>
        </div>
      </div>

    </div>
  );
}