import { DarkModeProvider } from '@/context/darkModeContext'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DarkModeProvider>
      <html lang="ru">
          <body className='font-sans text-sm md:text-base lg:text-xl dark:bg-darkPrimary'>{children}</body>
      </html>
    </DarkModeProvider>
  )
}
