import { DarkModeProvider } from '@/context/darkModeContext';
import './globals.css';
import { Header } from '@/components/Header/Header';
import { Suspense } from 'react';
import Footer from '@/components/Footer/Footer';
import NextTopLoader from 'nextjs-toploader';
import YandexMetrika from '@/components/YandexMetrika/YandexMetrika';
import Script from 'next/script';
import { Raleway, Open_Sans, Playfair_Display } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})
 
const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})

export const metadata = {
  title: {
    template: '%s — sereja-art',
    default: 'Разработка и продвижение сайтов под ключ — sereja-art',
  },
  description: 'Сайт-портфолио frontend-разработчика Артемова Сергея',
  applicationName: 'sereja-art',
  referrer: 'origin-when-cross-origin',
  keywords: ['sereja-art, sergey artemov, сайт портфолио веб-разработчика, веб разработка, frontend разработчик, портфолио веб разработчика'],
  authors: [{ name: 'Сергей Артемов', url: 'https://sereja-art.ru' }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{href: '/favicon-32x32.png', type: 'image/png', sizes: '32x32',}, {href: '/favicon-16x16.png', type: 'image/png', sizes: '16x16',}],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DarkModeProvider>
      <html lang="ru" className={`${playfair_display.variable} ${raleway.variable} ${open_sans.variable}`}>
        <body>
            {/* <Script id="metrika-counter" strategy="afterInteractive">
            {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(94063322, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`
            }
          </Script>
          <YandexMetrika /> */}
          <NextTopLoader height={6} color='#6767ab' />
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </DarkModeProvider>
  );
}
