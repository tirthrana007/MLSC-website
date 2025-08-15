import { useEffect } from 'react'
import Footer from "../layouts/Footer"
import globe from 'vanta/src/vanta.globe'
import styles from './Home.module.css'
import About from './About'
// import Gallery from '../layouts/Gallery'
import CounterUp from '../components/CounterUp'
// import { SliderData } from '../utils/data'

const Home = () => {

  useEffect(() => {
    globe({
      el: '#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 90.00,
      minWidth: 90.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x273ce8,
      backgroundColor: 0x190f29
    })
  })

  return (
    <main>
      <div className={styles.home_container}>
        <div className={styles.bg} id='vanta'></div>
        <div className={styles.home_content}>
          <div className={styles.hero_title}>
            <h1>MLSC <span>VCET</span></h1>
            <p>for the love of </p>
            <div>
 <FlipWords
  words={["Coding", "Innovation"]}
  duration={3000}
  className="font-bold text-white text-5xl sm:text-7xl lg:text-[10rem]"
/>
          </div>
        </div>
      </div>
      <About />
      {/* <Gallery  slides={SliderData}/> */}
      <CounterUp />
      <Footer />
    </main>
  )

}

export default Home
