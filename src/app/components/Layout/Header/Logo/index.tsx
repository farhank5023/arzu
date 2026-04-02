import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/app/utils/paths'

const Logo = () => {
  return (
    <Link href='/'>
      <Image
  src={getImgPath('/images/logo/logo_arzo.png')}
  alt='logo'
  width={150}
  height={50}
  className='h-12 w-auto object-contain block dark:hidden'
/>

<Image
  src={getImgPath('/images/logo/logo_arzo.png')}
  alt='logo'
  width={150}
  height={50}
  className='h-12 w-auto object-contain hidden dark:block'
/>
    </Link>
  )
}

export default Logo
