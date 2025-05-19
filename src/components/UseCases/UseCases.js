'use client';

import styles from './UseCases.module.css';
import utils from '@/styles/Utilities.module.css';
import animations from '@/styles/Animation.module.css';

export default function UseCases() {
  const cases = [
    ['👵 Elderly Monitoring', 'Check in on a vulnerable relative with sensors, alerts and live access.'],
    ['🐶 Pet Monitoring', 'See what your dog’s up to. Motion alerts and indoor cameras.'],
    ['⚡ Energy Saving', 'Track usage and switch off appliances when you’re out.'],
    ['🛌 Bedtime Routines', 'One button shuts off all lights, locks doors, and arms sensors.'],
    ['🚪 Door Alerts', 'Get notified if a back door or window is left open.'],
    ['🌅 Seasonal Modes', 'Lights come on at sunset, or run “Holiday” mode while away.'],
    ['🎤 Voice Commands', 'Turn on lights, heating or the kettle with Alexa or Siri.'],
    ['🎥 Cameras & Sensors', 'See and hear what’s happening live, right from your phone.'],
    ['📱 Remote Control', 'Manage everything from your phone — wherever you are.'],
  ];

  return (
    <section className={`${styles.useCases} ${utils.maxWidth}`}>
      <h2 className={styles.heading}>Every Day Use</h2>
      <p className={styles.subheading}>
        These are the real-world benefits you’ll get — no tech talk needed.
      </p>

      <div className={`${utils.grid} ${utils['grid-cols-1']} ${utils['grid-cols-2']} ${utils['grid-cols-3']}`}>
        {cases.map(([title, desc], i) => {
          const [emoji, ...textParts] = title.split(' ');
          return (
            <div
              key={i}
              className={`${styles.useCard} ${animations.slideUp} ${animations.hoverShadow}`}
            >
              <h4 className={styles.cardTitle}>
                <span className={styles.emoji} aria-hidden="true">{emoji}</span>
                {textParts.join(' ')}
              </h4>
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
