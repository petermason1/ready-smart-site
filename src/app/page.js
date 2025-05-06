// page.js - updated homepage with testimonial carousel and modern design

'use client';

import styles from './styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 600,
    infinite: true,
    pauseOnHover: true,
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    swipe: true,
  };

  return (
    <div className={styles.container}>
      <section className="heroSplit">
        <div className="heroContent">
          <h1>Smart Home. Simplified.</h1>
          <p>
            We set up and configure Home Assistant, Alexa, and Apple Home systems so you don&apos;t have to.
          </p>
          <Link href="/contact" className="cta">
            Book a Free Consultation
          </Link>
        </div>
        <Image
          src="/smart-home-preview.jpg"
          alt="Smart Home Preview"
          width={600}
          height={400}
          priority
        />
      </section>

      <div className={styles.gridWrapper}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image src="/icons/home-assistant.svg" alt="Home Assistant icon" width={32} height={32} />
            </div>
            <h2>Home Assistant</h2>
            <p>Powerful local control. Full automation. Privacy-first.</p>
            <Link href="/contact">Get Started</Link>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image src="/icons/apple.svg" alt="Apple Logo" width={32} height={32} />
            </div>
            <h2>Apple Home</h2>
            <p>Works seamlessly with your iPhone, iPad and Siri for voice control.</p>
            <Link href="/contact">Get Started</Link>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image src="/icons/alexa.svg" alt="Alexa icon" width={32} height={32} />
            </div>
            <h2>Alexa Devices</h2>
            <p>We configure, connect, and automate your Echo and Alexa-enabled gear.</p>
            <Link href="/contact">Get Started</Link>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image src="/icons/google-home.svg" alt="Google Home icon" width={32} height={32} />
            </div>
            <h2>Google Home</h2>
            <p>We set up Google Nest speakers, displays, and smart home control via Google Assistant.</p>
            <Link href="/contact">Get Started</Link>
          </div>
        </div>
      </div>

      <div className={styles.sectionDivider} />

      <section className={styles.testimonials}>
  <h3>What Customers Are Saying</h3>
  <div className={styles.carousel}>
    <Slider {...settings}>
      <blockquote>
        <p>&quot;Set up was fast, and now I control everything from my phone. Brilliant service!&quot;</p>
        <div className={styles.stars}>★★★★★</div>
        <cite>– Sarah, Newcastle</cite>
      </blockquote>
      <blockquote>
        <p>&quot;Everything was explained clearly and set up quickly. My smart home now works like magic.&quot;</p>
        <div className={styles.stars}>★★★★☆</div>
        <cite>– James, Gateshead</cite>
      </blockquote>
      <blockquote>
        <p>&quot;Absolutely love the automations. My lights, heating, and speakers all work together!&quot;</p>
        <div className={styles.stars}>★★★★★</div>
        <cite>– Claire, Durham</cite>
      </blockquote>
      <blockquote>
        <p>&quot;Great attention to detail — they really listened to what I needed and tailored everything to my setup.&quot;</p>
        <div className={styles.stars}>★★★★★</div>
        <cite>– Dan, Sunderland</cite>
      </blockquote>
      <blockquote>
        <p>&quot;Highly professional and knowledgeable. The installation was smooth, and support was excellent.&quot;</p>
        <div className={styles.stars}>★★★★★</div>
        <cite>– Louise, Hexham</cite>
      </blockquote>
    </Slider>
  </div>
</section>

    </div>
  );
}
