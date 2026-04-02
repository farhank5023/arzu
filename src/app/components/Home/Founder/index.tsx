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

            <p className="text-darkblue/80 dark:text-blue-300 text-base font-medium mb-5">
              Partner
            </p>

            <p className="text-lg leading-8 text-darkblue/80 dark:text-blue-200 normal-case">
              Mohammad Arif Khan brings extensive experience in manpower
              recruitment and operational management. As a Partner, he plays a
              key role in ensuring seamless execution of recruitment processes,
              maintaining quality standards, and delivering reliable workforce
              solutions to clients across multiple industries. His practical
              approach and commitment to excellence have been instrumental in
              strengthening long-term client relationships.
            </p>
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

            <p className="text-darkblue/80 dark:text-blue-300 text-base font-medium mb-5">
              Managing Partner
            </p>

            <p className="text-lg leading-8 text-darkblue/80 dark:text-blue-200 normal-case">
              As the Managing Partner, Zubair Ahmad Khan leads the strategic
              direction of the organization with a strong focus on growth,
              client satisfaction, and global expansion. With deep industry
              expertise, he has been pivotal in positioning Arzu International
              as a trusted manpower solutions provider across the Middle East.
              His leadership emphasizes innovation, reliability, and building
              enduring partnerships with clients worldwide.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Founder