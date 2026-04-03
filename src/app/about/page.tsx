'use client'

import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="pt-24 px-6 lg:px-10 max-w-6xl mx-auto space-y-16">

      {/* ===== PAGE HEADING ===== */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          About Us
        </h1>
      </div>

      {/* ===== MAIN DESCRIPTION ===== */}
      <div className="text-center space-y-6">
        <p className="text-lg text-gray-600 leading-relaxed">
          <span className="font-bold">
            Arzu International Manpower Consultant
          </span>{' '}
          (Registration No. B-0772/UP/PART/1000+/5/9188/2016) is a global
          recruitment organization providing quality manpower solutions across
          various categories of recruitment. We specialize in executing
          recruitment contracts for industries such as construction,
          maintenance, hospitality, stevedoring, transport, heavy equipment
          operations, fishing and marine, electricity generation, transmission,
          distribution, fabrication, welding, and hotel and catering.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          <span className="font-bold">Arzu International</span> is a professional
          HR, recruitment, selection, outsourcing, and manpower sourcing
          company. We provide various categories of workers including managers,
          engineers, accountants, supervisors, technicians (mechanics, drivers,
          operators, welders), fabricators, plumbers, electricians, carpenters,
          masons, and helpers. We supply skilled, semi-skilled, and unskilled
          workforces from India to different industries in Middle Eastern
          countries.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          Our head office is located in Mumbai, India. We emphasize offering
          affordable manpower solutions and aim to build long-lasting
          relationships with clients by providing high-quality candidates. We
          have successfully deployed a large workforce to major organizations
          globally.
        </p>
      </div>

      {/* ===== MANAGEMENT SECTION ===== */}
      <section className="space-y-6">

        <h2 className="text-5xl font-bold text-center mb-15">
          Our Management
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our company is managed by a highly efficient and qualified team of
              professionals who possess extensive experience in executing
              manpower contracts across multiple industries. Their expertise
              ensures smooth operations, timely delivery, and maintaining the
              highest standards in recruitment and client satisfaction.
            </p>
          </div>

          {/* IMAGE (SMALL + FULL VISIBLE) */}
          <div className="flex justify-center">
            <div className="relative w-[70%] h-52">
              <Image
                src="/images/about/prof.png"
                alt="Our Management"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ===== QUALITY POLICY SECTION ===== */}
      <section className="space-y-6">

        <h2 className="text-5xl font-bold text-center mb-15">
          Quality Policy
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We take full responsibility for the authenticity and reliability
              of our candidates. Our rigorous selection process ensures that all
              candidates meet international standards. We collaborate with
              certified trade test organizations to evaluate skills and ensure
              that every candidate is well-qualified before deployment. We also
              ensure timely mobilization so that candidates reach their
              respective sponsors as promised.
            </p>
          </div>

          {/* IMAGE (SMALL + FULL VISIBLE) */}
          <div className="flex justify-center">
            <div className="relative w-[70%] h-52">
              <Image
                src="/images/about/quality.png"
                alt="Quality Policy"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}