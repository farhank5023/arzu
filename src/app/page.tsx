// import ContactForm from './components/ContactForm'
import Category from './components/Home/Category'
import Founder from './components/Home/Founder'
import Hero from './components/Home/Hero'
// import Pricing from './components/Home/Pricing'
import Project from './components/Home/Project'
import Records from './components/Home/Records'
// import Review from './components/Home/Review'
import Specialize from './components/Home/Specialize'
import WhoWeAre from './components/Home/WhoWeAre'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <Project />
      <Records />
      {/* <Review /> */}
      <Specialize />
      {/* <Pricing /> */}
      <Category />
      <Founder/>
      {/* <ContactForm /> */}
    </main>
  )
}
