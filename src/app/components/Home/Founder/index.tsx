'use client'

import Image from 'next/image'
import { getImgPath } from '@/app/utils/paths'

const Founder = () => {
  return (
    <section className="py-20">

      {/* HEADING */}
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-5xl lg:text-6xl font-bold text-darkblue dark:text-white">
            Leadership
          </h2>
        </div>
      </div>

      <div className="container space-y-16">

        {/* PARTNER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] overflow-hidden rounded-xl shadow">

          {/* IMAGE */}
          <div className="relative w-full min-h-[350px] lg:min-h-full h-full overflow-hidden order-1 lg:order-none" style={{backgroundImage: `url('${getImgPath('/images/founder/bg-z.jpg')}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
           <Image
  src={getImgPath('/images/founder/arif.png')}
  alt="Mohammad Arif Khan"
  width={900}
  height={900}
  className="absolute -left-10 h-full w-auto object-contain z-10"
  style={{bottom: '-35px'}}
/>
          </div>

          {/* TEXT */}
          <div className="p-10 flex flex-col justify-center h-full order-2 lg:order-none">
            <h3 className="text-3xl lg:text-4xl font-bold mb-3 text-darkblue dark:text-blue-400">
              Mohammad Arif Khan
            </h3>

            <p className="text-darkblue/80 dark:text-blue-300 text-base font-medium mb-1">
              Partner
            </p>

            <p className="text-darkblue/80 dark:text-blue-300 text-base font-medium mb-6">
              +91 9987839452
            </p>

            <div className="relative">
              <Image
                src={getImgPath('/images/founder/q-2.png')}
                alt="quote"
                width={40}
                height={40}
                className="absolute -top-4 -left-2 opacity-50"
              />
              <p className="text-lg leading-8 text-darkblue/80 dark:text-blue-200 normal-case px-6">
                Our team combines multilingual expertise with professional trade testing partnerships. Based in Mumbai with a wide network across India and Nepal, we provide efficient candidate sourcing, screening, and professional travel assistance. We maintain the highest standards of quality, flexibility, cost-effectiveness, and ethical business practices to ensure seamless recruitment and successful placement of personnel across diverse industries in the Middle East.
              </p>
              <Image
                src={getImgPath('/images/founder/q-1.png')}
                alt="quote"
                width={40}
                height={40}
                className="absolute -bottom-4 -right-2 opacity-50"
              />
            </div>
          </div>

        </div>

        {/* MANAGING PARTNER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] overflow-hidden rounded-xl shadow">

          {/* IMAGE LEFT */}
          <div className="relative w-full min-h-[350px] lg:min-h-full h-full overflow-hidden order-1 lg:order-none" style={{backgroundImage: `url('${getImgPath('/images/founder/bg-z.jpg')}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <Image
              src={getImgPath('/images/founder/zubair.png')}
              alt="Zubair Ahmad Khan"
              width={900}
              height={900}
            className="absolute -left-10 h-full w-auto object-contain z-10"
            style={{bottom: '-5px'}}
            />
          </div>

          {/* TEXT RIGHT */}
          <div className="p-10 flex flex-col justify-center h-full order-2 lg:order-none">
            <h3 className="text-3xl lg:text-4xl font-bold mb-3 text-darkblue dark:text-blue-400">
              Zubair Ahmad Khan
            </h3>

            <p className="text-darkblue/80 dark:text-blue-300 text-base font-medium mb-1">
              Managing Partner
            </p>

            <p className="text-darkblue/80 dark:text-blue-300 text-base font-medium mb-6">
              +91 9820251680
            </p>

            <div className="relative">
              <Image
                src={getImgPath('/images/founder/q-2.png')}
                alt="quote"
                width={40}
                height={40}
                className="absolute -top-4 -left-2 opacity-50"
              />
              <p className="text-lg leading-8 text-darkblue/80 dark:text-blue-200 normal-case px-6">
                With 45+ years of industry experience since 1976, our leadership drive focuses on strategic growth and innovation. We've successfully recruited over 25,000 skilled professionals across Saudi Arabia, Bahrain, Oman, UAE, Kuwait, and Qatar. Our commitment to advanced business practices, client-centric solutions, and continuous improvement ensures sustainable partnerships. We leverage state-of-the-art infrastructure and professional expertise to deliver customized workforce solutions that exceed client expectations and maintain industry leadership standards.
              </p>
              <Image
                src={getImgPath('/images/founder/q-1.png')}
                alt="quote"
                width={40}
                height={40}
                className="absolute -bottom-4 -right-2 opacity-50"
              />
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Founder