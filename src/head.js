// app/head.js
import Script from 'next/script';

export default function Head() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VHE1WE56M8"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VHE1WE56M8', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
