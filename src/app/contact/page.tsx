import ContactForm from '../components/ContactForm/index'

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">
          Contact Us
        </h1>
        <p className="text-gray-600">
          Share your requirements and we’ll get back to you soon.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid md:grid-cols-2 gap-6 items-start">

        {/* LEFT → FORM */}
        <div className="border rounded-lg p-6 shadow-sm">
          <ContactForm />
        </div>

        {/* RIGHT → INFO + MAP */}
        <div className="flex flex-col gap-6">

          {/* Contact Card */}
          <div className="border rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Saudi Consulate I-Card No. 442/17/17<br />
              REGD. No. B-0772/UP/PART/1000+/5/9188/2016
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-700">
  
  {/* Email Icon */}
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    fill="currentColor" 
    viewBox="0 0 16 16"
    className="text-blue-900"
  >
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217L8 8.583 0 4.217V4z"/>
    <path d="M0 5.383v6.617a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.383l-7.447 4.653a1 1 0 0 1-1.106 0L0 5.383z"/>
  </svg>

  {/* Email Link */}
  <a 
    href="mailto:info@arzuinternational.com"
    className="hover:text-blue-900 transition"
  >
    info@arzuinternational.com
  </a>

</div>
          </div>

          {/* Map */}
          <div className="h-[415px] border rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.722499559411!2d80.9289914!3d26.848777199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd7963565b4b%3A0x5d0e4c7b3eee272!2sARZU%20INTERNATIONAL%20SHOP%20NO%2008%20SECOND%20FLOOR%20LUCKNOW%20PLAZA%20BUILDING!5e0!3m2!1sen!2sin!4v1774975856069!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
            ></iframe>
          </div>

        </div>

      </div>
{/* Office Addresses */}
<div className="mt-10">
  <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
    Our Offices
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {/* Lucknow */}
    <div className="border rounded-lg p-5 text-sm text-gray-700 leading-relaxed">
      <h3 className="text-base font-semibold text-blue-900 mb-3 flex items-center">
        <span className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 1 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
        </span>
        Head Office : Lucknow
      </h3>
      <p>
        Shop No. 8, 2nd Floor, Lucknow Plaza Building,
        Narizabad, Near Kolkata Family Mart Store, Aminabad,
        Lucknow - 2260118.<br />
        Tel : 0522-4624871
      </p>
    </div>

    {/* Mumbai */}
    <div className="border rounded-lg p-5 text-sm text-gray-700 leading-relaxed">
      <h3 className="text-base font-semibold text-blue-900 mb-3 flex items-center">
        <span className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 1 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
        </span>
        Branch Office : Mumbai
      </h3>
      <p>
        Shop No. S-42, AL Ezz Tower, 2nd Floor, E.R. Road,
        Opp. J.J. Petrol Pump, Bhindi Bazar,
        Mumbai - 400003
      </p>
    </div>

    {/* Delhi */}
    <div className="border rounded-lg p-5 text-sm text-gray-700 leading-relaxed">
      <h3 className="text-base font-semibold text-blue-900 mb-3 flex items-center">
        <span className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 1 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
        </span>
        Branch Office : Delhi
      </h3>
      <p>
        Shop No. B-1, Building No. 162, Opp. Escort Hospital,
        Gate No. 2, Sarai Jullena, Okhla,
        New Delhi - 110025<br />
        Tel : +91-11-40538077
      </p>
    </div>

  </div>
</div>
    </div>
  )
}