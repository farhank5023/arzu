'use client'

import { WhoWeAreType } from '@/app/types/whoWeAre'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import WhoWeAreSkeleton from '../../Skeleton/WhoWeAre'
import { getDataPath, getImgPath } from '@/app/utils/paths'

const WhoWeAre = () => {
  const [whoWeAreData, setWhoWeAreData] = useState<WhoWeAreType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath('/data.json'))
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setWhoWeAreData(data.WhoWeAreData)
      } catch (error) {
        console.error('Error fetching who we are data', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='who-we-are' className='scroll-mt-12'>
      <div className='container'>
        <div className='text-center mb-8'>
          <h2 className='mb-6'>Who We Are</h2>
          <p className='text-lg font-normal max-w-3xl mx-auto mb-8'>
            M/s Arzu International Manpower Consultant is a proprietary recruiting agency established in the year 1976, with almost four decades of experience in the field of recruitment of manpower from India and Nepal, particularly for countries in the Middle East. We have recruited over 25,000 personnel for reputed companies in the Gulf including Saudi Arabia, Bahrain, Oman, U.A.E., Kuwait, and Qatar.
          </p>
        </div>
        {/*  */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <WhoWeAreSkeleton key={i} />
              ))
            : whoWeAreData.map((item, i) => (
                <div key={i}>
                  <div className='bg-secondary dark:bg-darklight rounded-lg p-8'>
                    <div className='p-3 rounded-lg bg-primary w-fit mb-8 shadow-lg shadow-primary/30'>
                      <Image
                        src={getImgPath(item.imgSrc)}
                        alt={item.title}
                        width={24}
                        height={24}
                      />
                    </div>
                    <div>
                      <h5 className='font-bold mb-2'>{item.title}</h5>
                      <p className='text-base font-normal max-w-xs'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
