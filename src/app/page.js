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

  const features = [
    {
      icon: '/icons/home-assistant.svg',
      title: 'Home Assistant',
      text: 'Powerful local control. Full automation. Privacy-first.',
    },
    {
      icon: '/icons/apple.svg',
      title: 'Apple Home',
      text: 'Works seamlessly with your iPhone, iPad and Siri for voice control.',
    },
    {
      icon: '/icons/alexa.svg',
      title: 'Alexa Devices',
      text: 'We configure, connect, and automate your Echo and Alexa-enabled gear.',
    },
    {
      icon: '/icons/google-home.svg',
      title: 'Google Home',
      text: 'We set up Google Nest speakers, displays, and smart home control via Google Assistant.',
    },
  ];

  const testimonials = [
    {
      quote: 'Set up was fast, and now I control everything from my phone. Brilliant service!',
      stars: '★★★★★',
      name: 'Sarah, Newcastle',
    },
    {
      quote: 'Everything was explained clearly and set up quickly. My smart home now works like magic.',
      stars: '★★★★☆',
      name: 'James, Gateshead',
    },
    {
      quote: 'Absolutely love the automations. My lights, heating, and speakers all work together!',
      stars: '★★★★★',
      name: 'Claire, Durham',
    },
    {
      quote: 'Great attention to detail — they really listened to what I needed and tailored everything to my setup.',
      stars: '★★★★★',
      name: 'Dan, Sunderland',
    },
    {
      quote: 'Highly professional and knowledgeable. The installation was smooth, and support was excellent.',
      stars: '★★★★★',
      name: 'Louise, Hexham',
    },
  ];

  return (
    <div className={styles.container}>
      {/* HERO SECTION */}
      <section className={styles.heroSplit}>
        <div className={styles.heroContent}>
          <h1>Smart Home. Simplified.</h1>
          <p>
            We set up and configure Home Assistant, Alexa, and Apple Home systems so you don&apos;t have to.
          </p>
          <Link href="/contact" className={styles.cta}>
            <span>Book a Free Consultation</span>
          </Link>
        </div>

        <Image
          src="/smart-home-preview.jpg"
          alt="Smart Home Preview"
          width={600}
          height={400}
          priority
          className={styles.heroImage}
        />
      </section>

      {/* FEATURES GRID */}
      <div className={styles.gridWrapper}>
        <div className={styles.grid}>
          {features.map((card, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image
                  src={card.icon}
                  alt={`${card.title} icon`}
                  width={32}
                  height={32}
                />
              </div>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <Link href="/contact">
                <span>Get Started</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.sectionDivider} />

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <h3>What Customers Are Saying</h3>
        <div className={styles.carousel}>
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <blockquote key={i}>
                <p>&quot;{t.quote}&quot;</p>
                <div className={styles.stars}>{t.stars}</div>
                <cite>– {t.name}</cite>
              </blockquote>
            ))}
          </Slider>
        </div>
      </section>
      <Link href="/contact" className={styles.floatingCTA}>
  Book Now
</Link>

    </div>
  );
}
